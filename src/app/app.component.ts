import { Component } from '@angular/core';
 
//This is the main component file which includes the main two function which is dashboard and list of lawmakers

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/lawmakers" routerLinkActive="active">Lawmakers</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Lawmakers of Maldives';
}