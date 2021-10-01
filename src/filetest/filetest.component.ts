import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-filetest',
  templateUrl: './filetest.component.html',
  styleUrls: ['./filetest.component.css']
})
export class FiletestComponent implements OnInit, OnDestroy {

  constructor() { }
  
  ngOnInit(): void {
    console.log('%cFileTestComponent', 'background:green; color:white;');
  }
  ngOnDestroy(): void {
    console.log('%cFileTestComponent', 'background:red; color:white;');
  }
// ============================================================================

}
