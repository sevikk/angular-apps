import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import {DropdownComponent} from "./droppdown/droppdown.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ajaxService} from "./droppdown/dropdown.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        DropdownComponent
    ],
    providers: [ajaxService],
    bootstrap: [AppComponent]

})
export class AppModule {
}
