import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing.module';
import {CommonModule} from '@angular/common';

import {BaseService} from './core-module/services/base.service';
import {TicketService} from './tickets-module/services/ticket.service';

import {AppComponent} from './app.component';
import {FilterComponent} from './tickets-module/component/filter-component/filter.component';
import {TicketComponent} from './tickets-module/component/ticket-component/ticket.component';
import {MainComponent} from './tickets-module/container/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    TicketService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
