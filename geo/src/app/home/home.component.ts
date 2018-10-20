import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {MatPaginator, MatSort, MatTableDataSource, Sort} from '@angular/material';

import {ITableElements} from '../core/model/table-elements.model';

import {BaseService} from '../core/service/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnsToDisplay = ['place', 'mag', 'time', 'sig'];
  expandedElement: ITableElements;
  dataSource = new MatTableDataSource();

  sortedData: any[];

  filterForm = new FormGroup({
    filterItem: new FormControl('', Validators.minLength(3)),
  });


  constructor(private baseService: BaseService) {
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: any, filter: string)  => {
      const accumulator = (currentTerm, key) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.baseService.getGeos()
      .subscribe(data => {
        this.dataSource.data = data.features;
        console.log(this.dataSource);
      });

  }

  nestedFilterCheck(search, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

  applyFilter() {
    if (this.filterForm.valid) {
      const filterValue: string = this.filterForm.value.filterItem.trim().toLowerCase();
      this.dataSource.filter = filterValue;
    }

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'place': return this.compare(a.properties.place, b.properties.place, isAsc);
        case 'mag': return this.compare(a.properties.mag, b.properties.mag, isAsc);
        case 'time': return this.compare(a.properties.time, b.properties.time, isAsc);
        case 'sig': return this.compare(a.properties.sig, b.properties.sig, isAsc);
        default: return 0;
      }
    });
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}

