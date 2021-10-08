import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablesComponent } from '../tables/tables.component';
import { MaterialModule } from 'src/_modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParkingTablesComponent } from '../parking-tables/parking-tables.component';
import { ParkingQueueComponent } from '../parking-tables/parking-queue/parking-queue.component';
import { CardsComponent } from '../parking-tables/cards/cards.component';
import { GridTestComponent } from './grid-test/grid-test.component';
import { FiletestComponent } from '../filetest/filetest.component';
import { NaviComponent } from '../navi/navi.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    ParkingTablesComponent,
    ParkingQueueComponent,
    CardsComponent,
    GridTestComponent,
    FiletestComponent,
    NaviComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
