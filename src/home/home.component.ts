import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }
  
  ngOnInit(): void {
    console.log('%cHomeComponent', 'background:green;color:white');
  }
  ngOnDestroy(): void {
    console.log('%cHomeComponent', 'background:red;color:white');
  }
//=============================================================================
  
}
