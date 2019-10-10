import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BaseService {

  baseUrl = './assets/tickets.json';

  constructor(private http: HttpClient) { }

  getTickets() {
    return  this.http.get<any>(this.baseUrl);
  }

}
