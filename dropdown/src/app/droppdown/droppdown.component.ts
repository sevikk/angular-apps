import { Component, OnInit, trigger, transition, style, animate} from '@angular/core';
import {ajaxService} from "./dropdown.service";


@Component({
    selector: 'app-droppdown',
    templateUrl: './droppdown.component.html',
    styleUrls: ['./droppdown.component.css'],
    animations: [
        trigger(
            'enterAnimation', [
                transition(':enter', [
                    style({'max-height': '0px'}),
                    animate('500ms', style({'max-height': '200px'}))
                ]),
                transition(':leave', [
                    style({'max-height': '200px'}),
                    animate('500ms', style({'max-height': '0px'}))
                ])
            ]
        )
    ]
})

export class DropdownComponent implements OnInit {

    getContent: boolean = true;
    movieResults: string[];
    errorMessage: string;
    currentTitle: string = null;
    show: boolean = false;
    showStyle: boolean = false;

    constructor(private ajax: ajaxService) {
    }


    ngOnInit() {
        this.loadMovie();
    }



    getStyle() {
        if(this.showStyle) {
            return "open";
        } else {
            return "";
        }
    }


    loadMovie() {
        this.ajax.getMovie().subscribe(
            movieList => this.movieResults = movieList,
            error => {
                this.errorMessage = error;
                console.log(this.errorMessage);
                this.getContent == false;
            }
        )

    }


}
