//Importing Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//Importing created componenets
import { AppComponent }  from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { LawmakerDetailComponent } from './lawmaker-detail.component';
import { LawmakersComponent }  from './lawmakers.component';
import { LawmakerService }         from './lawmaker.service';
import { LawmakerSearchComponent }         from './lawmaker-search.component';

//Importing routing module where all the routes are kept
import { AppRoutingModule }     from './app-routing.module';

//declarations, imports and providers defining
@NgModule({
  imports:      [
  	BrowserModule, 
  	FormsModule,
  	HttpModule,
  	InMemoryWebApiModule.forRoot(InMemoryDataService),
  	AppRoutingModule
  	
  ],
  declarations: [ 
  	AppComponent,  
  	LawmakerDetailComponent, 
  	LawmakersComponent, 
  	DashboardComponent,
  	LawmakerSearchComponent
  ],
  providers: [ 
  	LawmakerService 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

