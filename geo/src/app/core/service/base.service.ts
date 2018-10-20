import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BaseService {

  private baseUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';

  constructor(private http: HttpClient) {
  }

  public getGeos(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }


}
