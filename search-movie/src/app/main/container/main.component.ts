import { Component, OnInit } from '@angular/core';
import {BaseService} from "../../core/services/base.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allMovies;


  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.baseService.getAllMovies().subscribe(
      resp => this.allMovies = resp
    )
  }

}
