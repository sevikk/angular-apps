import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/RX";
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {

  private baseUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a528038aeca96bd422081a1da3e5f20c&language=en-US&page=1';

  constructor(private http: Http) {
  }


  getAllMovies(): Observable<any> {
    let movieList = this.http.get(this.baseUrl)
      .map(this.extractProducts.bind(this));
    return movieList
  }

  private extractProducts(response: Response) {
    let movies = response.json().results;
    return movies;
  }

}
