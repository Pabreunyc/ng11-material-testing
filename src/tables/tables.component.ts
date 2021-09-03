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
public assignedToMe:Boolean = false;
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
    if(val.length == 0 || val.length >= 3)
      this.ticketList.filter = val;
  }
  onSelectionChange(filterName:string, evt:MatOptionSelectionChange) {
    filterName = (filterName || '').trim();
    let val = (evt as any).value;    
    console.log(filterName, val, typeof val);

    if(val == 0) {
      this.currentFilters.delete(filterName);
    } else {
      this.currentFilters.set(filterName, val);
    }  
    this.ticketList.filter = this.currentFilters;
  }
  assignedToMeFilter(evt) {
    let checked = evt.checked;
    console.log('assignedToMeFilter', checked);

    if(checked) {
      this.currentFilters.set('assignedTo', 1957);
    } else {
      this.currentFilters.delete('assignedTo');
    }
    this.ticketList.filter = this.currentFilters;
  }
  resetFilters(mode:string) {
    console.log('this.resetFilters', mode);
    this.searchRef = '';
    this.assignedToMe = false;
    this.ticketList.filter =  null;
    this.currentFilters.clear();
    this.statusFilterRef = this.priorityFilterRef = this.categoryFilterRef = null;
  }
// ============================================================================
  private _init() {
    this.displayedColumns = ['id', 'from', 'assignee', 'category', 'date'];
    
    

    forkJoin([
      this.dataService.getTicketList(),
      this.dataService.getTicketMeta(),
      this.dataService.getUserList()
    ]).subscribe(
      ret => {
        console.log(ret);
        this.ticketMeta = ret[1];

        this.getAssignedNames(ret[2], ret[0][0]);
        //this.ticketList = new MatTableDataSource( ret[0][0].slice(0,10) );
        this.ticketList = new MatTableDataSource( ret[0][0] );
        this.ticketList.filterPredicate = this.getFilterPredicate2();
      },
      err => {
        console.log('forkJoin.ERR', err);
      },
      () => { console.log('forkJoin.Complete'); }
    );

    
  }

  private getFilterPredicate() {
    return (row:any, filters: string):boolean => {
      console.log(filters, this.searchRef, row);
      let { fullName, subject } = row;
      fullName = (fullName || '').trim().toLocaleLowerCase();
      subject = (subject || '').trim().toLocaleLowerCase();

      let searchFound = [], selectsFound = [], flag = true;
      //console.log('fp', row.fullName); console.log('fp', filters);
      
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
        // dropdowns take precedence over text search
        if( !selectsFound.every(Boolean) )
          return false;
        filters = '';
      }
    
      fullName = (fullName || '').trim().toLowerCase();
      subject = (subject || '').trim().toLowerCase();

      searchFound.push(fullName.includes(filters));
      searchFound.push(subject.includes(filters));
      return searchFound.some(Boolean);
    }
  }
  private getFilterPredicate2() {
    return (row:any, filter:any) => {
      let foundFilters = [];
      
      this.currentFilters.forEach( function(v, k, mp) {
        foundFilters.push(row[k] == v);
      });

      if(!foundFilters.every(Boolean)) // filters failed
        return false;

      let { fullName, subject } = row;
      fullName = (fullName || '').trim().toLocaleLowerCase();
      subject = (subject || '').trim().toLocaleLowerCase();

      if(this.searchRef) {
        return fullName.includes(this.searchRef) || subject.includes(this.searchRef)
      } else {
        return foundFilters.every(Boolean);
      }

    }
  }
  private getAssignedNames(users, tickets) {
    let  usersMap = new Map(), tmp;
        
    (users as any).forEach(el => { usersMap.set(el.id, el); });
    console.log(usersMap, tickets);
    tickets.map( t => {
      t['assignee_first_name'] =
      t['assignee_last_name'] =
      t['assignee_full_name'] =
      t['assignee_team'] =      
      t['assignee_title'] = '';

      if(t.assignedTo != 0) {
        tmp = usersMap.get(t.assignedTo);
        t['assignee_first_name']  = tmp.first_name;
        t['assignee_last_name']   = tmp.last_name;
        t['assignee_full_name']   = `${tmp.first_name} ${tmp.last_name}`;
        t['assignee_team']        = (tmp.team || '').trim();
        t['assignee_title']       = (tmp.title || '').trim();
      }
    });
  }

}
