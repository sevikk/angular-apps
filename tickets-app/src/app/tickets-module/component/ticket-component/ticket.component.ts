import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {TicketService} from '../../services/ticket.service';
import {Observable} from 'rxjs/Observable';
import {Ticket} from '../../../core-module/models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TicketComponent implements OnInit {

  tickets$: Observable<Ticket[]>;

  constructor(private ticketService: TicketService) {
    this.tickets$ = this.ticketService.ticket$;
    this.ticketService.getTickets();
  }

  ngOnInit() {
  }

  changeCurrency( currency: string = 'UAH', price: number ) {
    return this.ticketService.changeCurrency(currency, price);
  }

  showCurrentStops(stops: number) {
    let stop;
    switch (stops) {
      case 0:
        stop = '';
      break;
      case 1:
        stop = stops + ' пересадка';
      break;
      case 2:
        stop = stops + ' пересадки';
        break;
      case 3 :
        stop = stops + ' пересадки';
        break;
    }
    return stop;
  }


}
