import {Injectable} from "@angular/core";
import {Http, Response } from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class ajaxService {

    private movieUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a528038aeca96bd422081a1da3e5f20c&language=en-US&page=1';

    constructor(private http: Http) { }



    public getMovie(): Observable<any> {
        let movieList = this.http.get(this.movieUrl)
            .map(this.extractProduct)
            .catch(this.handleError);
        return movieList;
    }

    private extractProduct(response: Response) {
        let movies = response.json().results;
        return movies;
    }

    private handleError(error: any, cought: Observable<any>): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }

        return Observable.throw(message);
    }


}
