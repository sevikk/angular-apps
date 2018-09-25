import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseService} from '../../core-module/services/base.service';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Ticket} from '../../core-module/models/ticket';

@Injectable()
export class TicketService {

  ticket$: Observable<Ticket[]>;
  private _tickets: BehaviorSubject<Ticket[]>;
  private dataStore: {
    ticket: Ticket[]
  };

  constructor(private http: HttpClient,
              private baseService: BaseService) {
    this.dataStore = {ticket: []};
    this._tickets = <BehaviorSubject<Ticket[]>>new BehaviorSubject([]);
    this.ticket$ = this._tickets.asObservable();
  }

  changeCurrency( currency: string = 'RUB', price: number ) {
    let cost = 0;

    switch (currency) {
      case 'USD':
        cost = price / 2;
        break;
      case 'EUR':
        cost = price / 4;
        break;
      default:
        cost = price;
    }
    return `${cost} ${currency} `;
  }


  getTickets() {
   this.baseService.getTickets()
      .subscribe(data => {
        this.dataStore.ticket = data.tickets.sort( (a, b) => a.price - b.price );
        this._tickets.next(this.dataStore.ticket);
      });
  }

  getFilterTickets(stops: number[]) {
    this.baseService.getTickets()
      .subscribe(res => {
        if (stops.length) {
          const filtered = res.tickets.filter((item) =>
            stops.includes(item.stops)
          );
          this._tickets.next(filtered.sort( (a, b) => a.price - b.price ));
        } else {
          this._tickets.next(this.dataStore.ticket);
        }
      });
    return false;
  }

  getFilterByCurrency(currency: string) {
    this.dataStore.ticket.map(item => item.currency = currency);
    this._tickets.next(this.dataStore.ticket);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }

}
