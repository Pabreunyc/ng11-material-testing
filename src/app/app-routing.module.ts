import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from 'src/parking-tables/cards/cards.component';
import { ParkingTablesComponent } from 'src/parking-tables/parking-tables.component';
import { TablesComponent } from 'src/tables/tables.component';

const routes: Routes = [
  { path:'tables', component:TablesComponent },
  { path: 'parking', component:ParkingTablesComponent },
  { path: 'cards', component:CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
