import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MainComponent} from './main/container/main.component';
import {CoreModule} from "./core/core.module";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app.routing";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
