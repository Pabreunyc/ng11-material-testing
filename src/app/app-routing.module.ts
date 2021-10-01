import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiletestComponent } from 'src/filetest/filetest.component';
import { CardsComponent } from 'src/parking-tables/cards/cards.component';
import { ParkingTablesComponent } from 'src/parking-tables/parking-tables.component';
import { TablesComponent } from 'src/tables/tables.component';
import { GridTestComponent } from './grid-test/grid-test.component';

const routes: Routes = [
  { path:'tables', component:TablesComponent },
  { path: 'parking', component:ParkingTablesComponent },
  { path: 'cards', component:CardsComponent },
  { path: 'grids', component:GridTestComponent },
  { path: 'filetest', component:FiletestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
