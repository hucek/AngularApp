//This is the dashboard component where all the functions of dashboard is included

import { Component, OnInit  } from '@angular/core';

//Importing lawmaker and lawmaker service
import { Lawmaker } from './lawmaker';
import { LawmakerService } from './lawmaker.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css', './lawmaker-detail.component.css' ]
})


//Creating the class for dashboard
export class DashboardComponent implements OnInit {

  lawmakers: Lawmaker[] = [];

  constructor(private lawmakerService: LawmakerService) { }

  ngOnInit(): void {
    this.lawmakerService.getLawmakers()
      .then(lawmakers => this.lawmakers = lawmakers.slice(0, 3));
  }
}