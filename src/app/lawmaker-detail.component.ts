//This is the component to show the details of the lawmaker
//Importing Angular Modules
import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit  } from '@angular/core'; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

//Importing Required Components and services
import { Lawmaker } from './lawmaker';
import { LawmakerService } from './lawmaker.service';


@Component({
  selector: 'lawmaker-detail',
  templateUrl: './lawmaker-detail.component.html',
  styleUrls: [ './lawmaker-detail.component.css' ]
})

//Defining the class
export class LawmakerDetailComponent implements OnInit {
	lawmaker: Lawmaker;

	//Inject the ActivatedRoute, LawmakerService, and Location services into the constructor, saving their values in private field
	constructor(
	  private lawmakerService: LawmakerService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	//Initiating function
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.lawmakerService.getLawmaker(+params.get('id')))
	    .subscribe(lawmaker => this.lawmaker = lawmaker);
	}

	//To navigates backward one step in the browser's history stack using the Location service you injected previously.
	goBack(): void {
	  this.location.back();
	}

	//Function to save the updated detials
	save(): void {
	  this.lawmakerService.update(this.lawmaker)
	    .then(() => this.goBack());
	}

	
}


