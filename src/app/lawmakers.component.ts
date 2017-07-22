//This the main component for the lawmakers

//importing nessasary modules
import { Component, OnInit  } from '@angular/core';

//Importing required components and classes
import { Lawmaker } from './lawmaker';
import { LawmakerService } from './lawmaker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-Lawmakers',
  templateUrl: './lawmakers.component.html',
  styleUrls: [ './lawmakers.component.css'],
  providers: [LawmakerService]
})

//Defining lawmaker component class
export class LawmakersComponent  implements OnInit { 
	title = 'Lawmakers of Maldives';
	lawmakers: Lawmaker[];
	selectedLawmaker: Lawmaker;

	//Getting the list of lawmakers
	getLawmakers(): void {
		this.lawmakerService.getLawmakers().then(lawmakers => this.lawmakers = lawmakers);
	}

	//The initiating function
 	ngOnInit(): void {
    	this.getLawmakers();
  	}
 	
 	//Function to be handling the onselect
	onSelect(lawmaker: Lawmaker): void {
		this.selectedLawmaker = lawmaker;
	}

	//Implementing gotoDetail() by to call the router navigate() method.
	
	gotoDetail(): void {
	  this.router.navigate(['/detail', this.selectedLawmaker.id]);
	}

	//Function to add a new Lawmaker
	add(name: string): void {
	  name = name.trim();
	  if (!name) { return; }
	  this.lawmakerService.create(name)
	    .then(lawmaker => {
	      this.lawmakers.push(lawmaker);
	      this.selectedLawmaker = null;
	    });
	}

	//function to delete a lawmaker
	delete(lawmaker: Lawmaker): void {
	  this.lawmakerService
	      .delete(lawmaker.id)
	      .then(() => {
	        this.lawmakers = this.lawmakers.filter(h => h !== lawmaker);
	        if (this.selectedLawmaker === lawmaker) { this.selectedLawmaker = null; }
	      });
	}
	constructor( private router: Router, private lawmakerService: LawmakerService) { }
}
