import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DatasourceService } from 'src/_services/datasource.service';
import { FileService } from 'src/_services/file.service';

@Component({
  selector: 'app-parking-tables',
  templateUrl: './parking-tables.component.html',
  styleUrls: ['./parking-tables.component.css']
})
export class ParkingTablesComponent implements OnInit, OnDestroy {
  public displayColumns = [];
  public permitsQueue = new MatTableDataSource();
  public dateFormat1 = "E M/d/y h:mm a";

  constructor(
    private ds:DatasourceService,
    private fs:FileService
  ) { }

  ngOnInit(): void {
    console.log('%cParkingTablesComponent','background:green; color:white;');
    this._init();
  }
  ngOnDestroy(): void {
    console.log('%cParkingTablesComponent','background:red; color:white;');
  }
// ============================================================================
  onRowSelect(row) {
    console.log('onRowSelect:', row);
  }
  downloadPermit(row:any) {
    console.log('downloadPermit', row);

    if( window.confirm(`Download permit for ${row.emp_full_name}?`) ) {
      this.ds.downloadPermit(row.queue_id).subscribe(
        resp => {
          console.log('ds.downloadPermit', resp);
        },
        err => {
          console.log('ds.downloadPermit.ERR', err);
        }
      );
    }
  }
// ============================================================================
  private _init() {
    this.displayColumns = ['permitFor', 'dates', 'expDate', 'status'];
    this.ds.parkingList().subscribe(
      list => {
        let today = Date.now(), d;
        console.log('ds.parkingList', list);
        list.map( e => {
          d = Date.parse(e.expiration_date);
          console.log(e.expiration_date, d, d - today);
          e['past_expiration_date'] =  (d - today) <= 0;
        });
        this.permitsQueue = list;
      },
      err => { console.log('ERR', err); }
    );
  }
}
