import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatasourceService } from 'src/_services/datasource.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  public dateFormat = "E M/d/y h:mm a";
  public permitsQueue;

  constructor(
    private ds:DatasourceService
  ) { }

  ngOnInit(): void {
    console.log('%cCardsComponent','background:green;color:white;');
    this._init();
  }
  ngOnDestroy(): void {
    console.log('%cCardsComponent','background:red;color:white;');
  }
// ============================================================================
downloadPermit(row) {
  console.log('downloadPermit', row);
}
// ============================================================================
  private _init() {
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
