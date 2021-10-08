import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiletestComponent } from 'src/filetest/filetest.component';
import { HomeComponent } from 'src/home/home.component';
import { LoginComponent } from 'src/login/login.component';
import { NaviComponent } from 'src/navi/navi.component';
import { CardsComponent } from 'src/parking-tables/cards/cards.component';
import { ParkingTablesComponent } from 'src/parking-tables/parking-tables.component';
import { TablesComponent } from 'src/tables/tables.component';
import { AuthGuard } from 'src/_services/auth.guard';
import { GridTestComponent } from './grid-test/grid-test.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path:'login', component:LoginComponent },
  { path:'tables', component:TablesComponent },
  { path:'parking', component:ParkingTablesComponent },
  { path:'cards', component:CardsComponent },
  { path:'grids', component:GridTestComponent },
  { path:'filetest', component:FiletestComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
