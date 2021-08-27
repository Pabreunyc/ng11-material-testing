import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { DatasourceService } from 'src/_services/datasource.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit, OnDestroy {
public displayedColumns:Array<string>;
public ticketList = null;

public currentFilters = new Map();
public searchInput:string = '';
public searchRef:string = '';
public statusFilterRef;
public priorityFilterRef;
public categoryFilterRef;
public ticketMeta;

  constructor(    
    private dataService:DatasourceService
  ) { }

  ngOnInit(): void {
    console.log('%cTablesCompoent', 'background:green;color:white;');
    this._init();
  }
  ngOnDestroy(): void {
    console.log('%cTablesCompoent', 'background:red;color:black;');
  }
// ============================================================================

  onRowSelect(row) {
    console.log('this.onRowSelect', row);
  }

  applySearchFilter(evt:Event) {
    let val = (evt.target as HTMLInputElement).value.trim().toLowerCase();
    if(val.length >= 3)
      this.ticketList.filter = val;
  }
  onSelectionChange(filterName:string, evt:MatOptionSelectionChange) {
    filterName = (filterName || '').trim().toLocaleLowerCase();
    let val = (evt as any).value;    
    this.ticketList.filter = this.currentFilters.set(filterName, val);
  }
  
  resetFilters(mode:string) {
    console.log('this.resetFilters', mode);
    this.searchRef = '';
    this.ticketList.filter =  null;
    this.currentFilters.clear();
    this.statusFilterRef = this.priorityFilterRef = this.categoryFilterRef = null;
  }
// ============================================================================
  private _init() {
    this.displayedColumns = ['id', 'from', 'category', 'date'];

    forkJoin([
      this.dataService.getTicketList(),
      this.dataService.getTicketMeta()
    ]).subscribe(
      ret => {
        console.log(ret);
        this.ticketMeta = ret[1];
        this.ticketList = new MatTableDataSource( ret[0][0].slice(0,10) );
        this.ticketList.filterPredicate = this.getFilterPredicate();
      },
      err => {
        console.log('forkJoin.ERR', err);
      },
      () => { console.log('forkJoin.Complete'); }
    );

    
  }

  private getFilterPredicate() {
    return (row:any, filters: string):boolean => {
      let searchFound = [], selectsFound = [], flag = true;
      console.log('fp', row.fullName); console.log('fp', filters);
      
      //dropdowns 
      if(typeof filters == 'object') {
        if(this.statusFilterRef) {
          selectsFound.push(row.status == this.statusFilterRef);
        }
        if(this.priorityFilterRef) {
          selectsFound.push(row.priorityId == this.priorityFilterRef);
        }
        if(this.categoryFilterRef) {
          selectsFound.push(row.categoryId == this.categoryFilterRef);
        }
        //console.log(this.statusFilterRef, this.priorityFilterRef, this.categoryFilterRef, selectsFound);
        // dropdowns take preference over text search
        if( !selectsFound.every(Boolean) )
          return false;
        filters = '';
      }
    
      let { fullName, subject } = row;
      fullName = (fullName || '').trim().toLowerCase();
      subject = (subject || '').trim().toLowerCase();

      searchFound.push(fullName.includes(filters));
      searchFound.push(subject.includes(filters));
      return searchFound.some(Boolean);
    }
  }
}
