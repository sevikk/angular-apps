webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "$fontfamily: \"Open Sans\", sans-serif;\r\n$bgColor: #f3f7fa;\r\n$borderCurrency: #d2d5d6;\r\n$blue: #2196f3;\r\n$white: #fff;\r\n$bgHover: #f2fcff;\r\n$black: #000;\r\n$orange: #ff6d00;\r\n$orangeHover: #ff8124;\r\n$orangeBorder: #d64d08;\r\n$grey: #eceff1;\r\n$date: #aab0b2;\r\nbody {\r\n  font-family: $fontfamily;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_module_services_base_service__ = __webpack_require__("./src/app/core-module/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tickets_module_services_ticket_service__ = __webpack_require__("./src/app/tickets-module/services/ticket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tickets_module_component_filter_component_filter_component__ = __webpack_require__("./src/app/tickets-module/component/filter-component/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tickets_module_component_ticket_component_ticket_component__ = __webpack_require__("./src/app/tickets-module/component/ticket-component/ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tickets_module_container_main_component__ = __webpack_require__("./src/app/tickets-module/container/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__tickets_module_container_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tickets_module_component_filter_component_filter_component__["a" /* FilterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tickets_module_component_ticket_component_ticket_component__["a" /* TicketComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__tickets_module_services_ticket_service__["a" /* TicketService */],
                __WEBPACK_IMPORTED_MODULE_5__core_module_services_base_service__["a" /* BaseService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets_module_container_main_component__ = __webpack_require__("./src/app/tickets-module/container/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__tickets_module_container_main_component__["a" /* MainComponent */] },
    { path: '**', redirectTo: '/main' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core-module/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseService = /** @class */ (function () {
    function BaseService(http) {
        this.http = http;
        this.baseUrl = './assets/tickets.json';
    }
    BaseService.prototype.getTickets = function () {
        return this.http.get(this.baseUrl);
    };
    BaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/tickets-module/component/filter-component/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter_block\">\r\n  <div class=\"filter_block_box\">\r\n    <h3 class=\"filter_block_currency_title\">Валюта</h3>\r\n    <div class=\"filter_block_currency\">\r\n      <div class=\"filter_block_currency_item\"\r\n           [class.active]=\"selectedCurrencyUSD\"\r\n           (click)=\"onCurrencyClick($event, 'USD')\">\r\n        USD\r\n      </div>\r\n      <div class=\"filter_block_currency_item\"\r\n           [class.active]=\"selectedCurrencyEUR\"\r\n           (click)=\"onCurrencyClick($event, 'EUR')\">\r\n        EUR\r\n      </div>\r\n      <div class=\"filter_block_currency_item\"\r\n           [class.active]=\"selectedCurrencyRUB\"\r\n           (click)=\"onCurrencyClick($event, 'RUB')\">\r\n        UAH\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"filter_stops\">\r\n    <div class=\"filter_block_stops\">\r\n      <h3 class=\"filter_block_currency_title\">Количество пересадок</h3>\r\n      <div class=\"filter_block_stops_box\">\r\n        <div class=\"filter_block_stops_label\">\r\n          <input type=\"checkbox\" id='all' [checked]=\"allChecked\" (change)='onChangeFilteringTicketsAll()'>\r\n          <label for=\"all\">Все</label>\r\n        </div>\r\n        <div class=\"filter_block_stops_label\">\r\n          <input type=\"checkbox\" id='zero' (change)='onChangeFilteringTickets($event, 0)'>\r\n          <label for=\"zero\">Без пересадок</label>\r\n          <span (click)=\"onOnlyClickButton(0)\" class=\"filter_block_stops_box-only\">только</span>\r\n        </div>\r\n        <div class=\"filter_block_stops_label\">\r\n          <input type=\"checkbox\" id='one' (change)='onChangeFilteringTickets($event, 1)'>\r\n          <label for=\"one\">1 пересадка</label>\r\n          <span (click)=\"onOnlyClickButton(1)\" class=\"filter_block_stops_box-only\">только</span>\r\n        </div>\r\n        <div class=\"filter_block_stops_label\">\r\n          <input type=\"checkbox\" id='two' (change)='onChangeFilteringTickets($event, 2)'>\r\n          <label for=\"two\">2 пересадки</label>\r\n          <span (click)=\"onOnlyClickButton(2)\" class=\"filter_block_stops_box-only\">только</span>\r\n        </div>\r\n        <div class=\"filter_block_stops_label\">\r\n          <input type=\"checkbox\" id='three' (change)='onChangeFilteringTickets($event, 3)'>\r\n          <label for=\"three\">3 пересадки</label>\r\n          <span (click)=\"onOnlyClickButton(3)\" class=\"filter_block_stops_box-only\">только</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/tickets-module/component/filter-component/filter.component.scss":
/***/ (function(module, exports) {

module.exports = ".filter_block {\n  background-color: #fff;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0 11px -4px black;\n          box-shadow: 0 0 11px -4px black; }\n\n.filter_block_box {\n  padding: 20px; }\n\n.filter_stops .filter_block_currency_title,\n.filter_stops .filter_block_stops_label {\n  padding-left: 20px; }\n\n.filter_stops {\n  padding-bottom: 20px; }\n\n.filter_block_currency_title {\n  font-size: 12px;\n  text-transform: uppercase; }\n\n.filter_block_currency {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 6px; }\n\n.filter_block_currency_item {\n  width: 33%;\n  padding: 10px;\n  color: #2196f3;\n  text-align: center;\n  border: 1px solid #d2d5d6;\n  cursor: pointer;\n  -webkit-transition: .2s;\n  transition: .2s; }\n\n.filter_block_currency_item.active {\n  background-color: #2196f3;\n  color: #fff;\n  border-color: #2196f3; }\n\n.filter_block_currency_item:hover {\n  border-color: #2196f3;\n  color: #2196f3;\n  -webkit-transition: .2s;\n  transition: .2s;\n  background-color: #f2fcff; }\n\n.filter_block_currency div.filter_block_currency_item:first-child {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.filter_block_currency div.filter_block_currency_item:last-child {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.filter_block_stops {\n  margin-top: 20px; }\n\n.filter_block_stops_box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.filter_block_stops_label {\n  position: relative;\n  padding-top: 5px; }\n\n.filter_block_stops_box-only {\n  display: none;\n  position: absolute;\n  right: 27px;\n  top: 8px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #2196f3;\n  cursor: pointer; }\n\n.filter_block_stops_label:hover {\n  background: #f2fcff; }\n\n.filter_block_stops_label:hover .filter_block_stops_box-only {\n  display: block; }\n\n.filter_block_stops_label input {\n  padding: 0;\n  height: initial;\n  width: initial;\n  margin-bottom: 0;\n  display: none;\n  cursor: pointer; }\n\n.filter_block_stops_label label {\n  position: relative;\n  cursor: pointer; }\n\n.filter_block_stops_label label:before {\n  content: '';\n  -webkit-appearance: none;\n  background-color: transparent;\n  border: 1px solid #2196f3;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);\n  padding: 10px;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  cursor: pointer;\n  margin-right: 5px;\n  border-radius: 4px; }\n\n.filter_block_stops_label input:checked + label:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 5px;\n  left: 9px;\n  width: 6px;\n  height: 14px;\n  border: solid #2196f3;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n"

/***/ }),

/***/ "./src/app/tickets-module/component/filter-component/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__ = __webpack_require__("./src/app/tickets-module/services/ticket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var fullStops = [0, 1, 2, 3];
var FilterComponent = /** @class */ (function () {
    function FilterComponent(ticketService) {
        this.ticketService = ticketService;
        this.stopsTicket = [];
        this.selectedCurrencyRUB = true;
        this.allChecked = false;
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.checkboxes = document.querySelectorAll('input[type=checkbox]');
    };
    FilterComponent.prototype.onChangeFilteringTickets = function (event, stop) {
        if (this.stopsTicket.includes(stop)) {
            this.stopsTicket = this.stopsTicket.filter(function (currentStop) { return currentStop !== stop; });
            this.allChecked = false;
        }
        else {
            this.stopsTicket.push(stop);
        }
        this.ticketService.getFilterTickets(this.stopsTicket);
    };
    FilterComponent.prototype.onChangeFilteringTicketsAll = function () {
        this.allChecked = !this.allChecked;
        if (this.allChecked) {
            for (var i = 0; i < this.checkboxes.length; i++) {
                this.checkboxes[i].checked = true;
            }
            this.stopsTicket = fullStops;
            this.ticketService.getFilterTickets(this.stopsTicket);
        }
        else {
            for (var i = 0; i < this.checkboxes.length; i++) {
                this.checkboxes[i].checked = false;
            }
            this.ticketService.getFilterTickets([]);
        }
    };
    FilterComponent.prototype.onCurrencyClick = function (e, currency) {
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
    };
    FilterComponent.prototype.onOnlyClickButton = function (onlyStop) {
        this.allChecked = false;
        for (var i = 0; i < this.checkboxes.length; i++) {
            if (i === onlyStop + 1) {
                this.checkboxes[i].checked = true;
            }
            else {
                this.checkboxes[i].checked = false;
            }
        }
        this.ticketService.getFilterTickets([onlyStop]);
    };
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filter',
            template: __webpack_require__("./src/app/tickets-module/component/filter-component/filter.component.html"),
            styles: [__webpack_require__("./src/app/tickets-module/component/filter-component/filter.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ticket_service__["a" /* TicketService */]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/tickets-module/component/ticket-component/ticket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tickets\">\r\n  <div class=\"\">\r\n    <div *ngFor='let ticket of tickets$ | async' class=\"tickets_box\">\r\n      <div class=\"tickets_box_airline_block\">\r\n        <img src=\"./assets/images/logoAirlines.png\" alt=\"\">\r\n\r\n        <button class=\"tickets_box_airline_block_buy\" type=\"button\"> Купить <br/> за {{ changeCurrency(ticket.currency, ticket.price) }}\r\n        </button>\r\n      </div>\r\n      <div class=\"tickets_box_info\">\r\n        <div class=\"tickets_box_info_from\">\r\n          <h3 class=\"tickets_box_info-time\">{{ ticket.departure_time }}</h3>\r\n          <h5 class=\"tickets_box_info-origin\"> {{ticket.origin }}, {{ticket.origin_name }} </h5>\r\n          <h5 class=\"tickets_box_info-date\"> {{ticket.departure_date | date:'d MMM yyyy, EEEEEE'}} </h5>\r\n        </div>\r\n        <div class=\"tickets_box_info_stops\">\r\n          <span class=\"tickets_box_info_stops-title\">{{ showCurrentStops(ticket.stops) }}</span>\r\n        </div>\r\n        <div class=\"tickets_box_info_to\">\r\n          <h3 class=\"tickets_box_info-time\">{{ ticket.arrival_time }}</h3>\r\n          <h5 class=\"tickets_box_info-origin\">{{ticket.destination_name }}, {{ticket.destination }} </h5>\r\n          <h5 class=\"tickets_box_info-date\"> {{ticket.arrival_date | date:'d MMM yyyy, EEEEEE'}} </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tickets-module/component/ticket-component/ticket.component.scss":
/***/ (function(module, exports) {

module.exports = ".tickets_box {\n  min-height: 160px;\n  margin-bottom: 20px;\n  background-color: #fff;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0 11px -4px #000;\n          box-shadow: 0 0 11px -4px #000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.tickets_box_airline_block {\n  width: 30%;\n  min-height: 160px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-right: 1px solid #eceff1; }\n\n.tickets_box_info {\n  width: 70%;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.tickets_box_airline_block_buy {\n  width: 158px;\n  margin-top: 20px;\n  border: none;\n  color: #fff;\n  background-color: #ff6d00;\n  border-radius: 6px;\n  padding: 5px 0;\n  -webkit-box-shadow: 0 1px 0px 0px #d64d08;\n          box-shadow: 0 1px 0px 0px #d64d08;\n  outline: none;\n  cursor: pointer;\n  -webkit-transition: .2s;\n  transition: .2s; }\n\n.tickets_box_airline_block_buy:hover {\n  background-color: #ff8124;\n  -webkit-transition: .2s;\n  transition: .2s; }\n\n.tickets_box_info-time {\n  font-size: 32px;\n  font-weight: 400;\n  margin-bottom: 0px; }\n\n.tickets_box_info-origin {\n  font-size: 12px;\n  margin-bottom: 10px; }\n\n.tickets_box_info-date {\n  font-size: 12px;\n  font-weight: 400;\n  color: #aab0b2; }\n\n.tickets_box_info_stops {\n  width: 110px;\n  position: relative; }\n\n.tickets_box_info_stops-title {\n  font-size: 12px;\n  font-weight: 400;\n  color: #aab0b2; }\n\n.tickets_box_info_stops:after {\n  content: '';\n  position: absolute;\n  top: 20px;\n  left: -10px;\n  width: 100px;\n  height: 13px;\n  background: url(\"https://sevikk.github.io/angular-apps/assets/images/plane.png\") center no-repeat; }\n"

/***/ }),

/***/ "./src/app/tickets-module/component/ticket-component/ticket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__ = __webpack_require__("./src/app/tickets-module/services/ticket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TicketComponent = /** @class */ (function () {
    function TicketComponent(ticketService) {
        this.ticketService = ticketService;
        this.tickets$ = this.ticketService.ticket$;
        this.ticketService.getTickets();
    }
    TicketComponent.prototype.ngOnInit = function () {
    };
    TicketComponent.prototype.changeCurrency = function (currency, price) {
        if (currency === void 0) { currency = 'UAH'; }
        return this.ticketService.changeCurrency(currency, price);
    };
    TicketComponent.prototype.showCurrentStops = function (stops) {
        var stop;
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
            case 3:
                stop = stops + ' пересадки';
                break;
        }
        return stop;
    };
    TicketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ticket',
            template: __webpack_require__("./src/app/tickets-module/component/ticket-component/ticket.component.html"),
            styles: [__webpack_require__("./src/app/tickets-module/component/ticket-component/ticket.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ticket_service__["a" /* TicketService */]])
    ], TicketComponent);
    return TicketComponent;
}());



/***/ }),

/***/ "./src/app/tickets-module/container/main.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"container\">\r\n    <div class=\"logo_block\">\r\n      <img src=\"./assets/images/logo.png\" alt=\"image\">\r\n    </div>\r\n\r\n    <div class=\"content_block\">\r\n      <div class=\"col-xs-12 col-sm-4\">\r\n        <app-filter></app-filter>\r\n      </div>\r\n      <div class=\"col-sm-8 col-xs-12\">\r\n        <app-ticket></app-ticket>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n"

/***/ }),

/***/ "./src/app/tickets-module/container/main.component.scss":
/***/ (function(module, exports) {

module.exports = "main {\n  min-height: 100vh;\n  background-color: #f3f7fa; }\n\n.logo_block {\n  text-align: center; }\n\n.content_block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/tickets-module/container/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/tickets-module/container/main.component.html"),
            styles: [__webpack_require__("./src/app/tickets-module/container/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/tickets-module/services/ticket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_module_services_base_service__ = __webpack_require__("./src/app/core-module/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TicketService = /** @class */ (function () {
    function TicketService(http, baseService) {
        this.http = http;
        this.baseService = baseService;
        this.dataStore = { ticket: [] };
        this._tickets = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.ticket$ = this._tickets.asObservable();
    }
    TicketService.prototype.changeCurrency = function (currency, price) {
        if (currency === void 0) { currency = 'UAH'; }
        var cost = 0;
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
        return cost + " " + currency + " ";
    };
    TicketService.prototype.getTickets = function () {
        var _this = this;
        this.baseService.getTickets()
            .subscribe(function (data) {
            _this.dataStore.ticket = data.tickets.sort(function (a, b) { return a.price - b.price; });
            _this._tickets.next(_this.dataStore.ticket);
        });
    };
    TicketService.prototype.getFilterTickets = function (stops) {
        var _this = this;
        this.baseService.getTickets()
            .subscribe(function (res) {
            if (stops.length) {
                var filtered = res.tickets.filter(function (item) {
                    return stops.includes(item.stops);
                });
                _this._tickets.next(filtered.sort(function (a, b) { return a.price - b.price; }));
            }
            else {
                _this._tickets.next(_this.dataStore.ticket);
            }
        });
        return false;
    };
    TicketService.prototype.getFilterByCurrency = function (currency) {
        this.dataStore.ticket.map(function (item) { return item.currency = currency; });
        this._tickets.next(this.dataStore.ticket);
    };
    TicketService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    TicketService.prototype.log = function (message) {
        console.log(message);
    };
    TicketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__core_module_services_base_service__["a" /* BaseService */]])
    ], TicketService);
    return TicketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map