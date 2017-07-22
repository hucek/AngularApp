//Importing required angular modules
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importing components created
import { DashboardComponent }   from './dashboard.component';
import { LawmakersComponent }      from './lawmakers.component';
import { LawmakerDetailComponent }  from './lawmaker-detail.component';

//Defining the routes which will be used by this applicaton
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: LawmakerDetailComponent },
  { path: 'lawmakers',     component: LawmakersComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}