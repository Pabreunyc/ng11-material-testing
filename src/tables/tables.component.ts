import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DatasourceService } from 'src/_services/datasource.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit, OnDestroy {
public displayedColumns:Array<string>;
public ticketList = null;

public searchInput:string = '';
public searchRef:string = '';
public statusFilterRef;
public priorityFilterRef;
public categoryFilterRef;
public ticketMeta = {
  status: [],
  priority: [],
  allCategories: []
}

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

  applySearchFilter(evt) {
    let val = (evt.target as HTMLInputElement).value.trim().toLowerCase();
    if(val.length >= 3) {
      this.ticketList.filter = val;
    }
  }
  onSelectionChange(selectName:string, evt:Event) {
    let val = (evt.target as HTMLInputElement).value;
    console.log('this.onSelectionChange', val);
  }
  
  resetFilters(mode:string) {
    console.log('this.resetFilters', mode);
  }
// ============================================================================
private _init() {
  this.displayedColumns = ['id', 'from', 'category', 'date'];

  this.ticketMeta.status = [
    {id:100, label:"New"}, {id:200, label:'Open'}, {id:300, label:'Closed'}
  ];
  this.ticketMeta.priority = [
    {priority_id:100, priority_desc:'Normal'}, {priority_id:200, priority_desc:'High'}
  ];
  this.ticketMeta.allCategories = [
    {ticket_cat_id:100, ticket_cat_detail:'CAD'},{ticket_cat_id:100, ticket_cat_detail:'Olmsted'},{ticket_cat_id:100, ticket_cat_detail:'Unifier'},
  ];

    this.dataService.getTicketList().subscribe(
      list => {
        console.log(list);
        this.ticketList = new MatTableDataSource(list[0]);
      }
    )
}

}
