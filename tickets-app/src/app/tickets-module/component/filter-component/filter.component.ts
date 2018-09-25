import {Component, OnInit} from '@angular/core';
import { TicketService } from '../../services/ticket.service';

const fullStops = [0, 1, 2, 3];

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  stopsTicket = [];
  selectedCurrencyUSD: boolean;
  selectedCurrencyEUR: boolean;
  selectedCurrencyRUB = true;

  allChecked = false;

  checkboxes;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.checkboxes = document.querySelectorAll('input[type=checkbox]');
  }

  onChangeFilteringTickets(event, stop) {
      if (this.stopsTicket.includes(stop) ) {
        this.stopsTicket = this.stopsTicket.filter( currentStop => currentStop !== stop );
        this.allChecked = false;
      } else {
        this.stopsTicket.push(stop);
      }
      this.ticketService.getFilterTickets(this.stopsTicket);
  }

  onChangeFilteringTicketsAll() {
    this.allChecked = !this.allChecked;
    if (this.allChecked) {
      for ( let i = 0; i < this.checkboxes.length; i++) {
        this.checkboxes[i].checked = true;
      }
      this.stopsTicket = fullStops;
      this.ticketService.getFilterTickets(this.stopsTicket);
    } else {
      for ( let i = 0; i < this.checkboxes.length; i++) {
        this.checkboxes[i].checked = false;
      }
      this.ticketService.getFilterTickets([]);
    }
  }

  onCurrencyClick(e, currency: string) {
    switch (currency) {
      case 'USD':
        this.selectedCurrencyUSD = true;
        this.selectedCurrencyEUR = false;
        this.selectedCurrencyRUB = false;
        break;
      case 'EUR':
        this.selectedCurrencyUSD = false;
        this.selectedCurrencyEUR = true;
        this.selectedCurrencyRUB = false;
        break;
      case 'RUB':
        this.selectedCurrencyUSD = false;
        this.selectedCurrencyEUR = false;
        this.selectedCurrencyRUB = true;
        break;
    }
    this.ticketService.getFilterByCurrency(currency);
  }

  onOnlyClickButton(onlyStop: number) {
    this.allChecked = false;
    for ( let i = 0; i < this.checkboxes.length; i++) {
      if ( i === onlyStop + 1) {
        this.checkboxes[i].checked = true;
      } else {
        this.checkboxes[i].checked = false;
      }
    }
    this.ticketService.getFilterTickets([onlyStop]);
  }
}
