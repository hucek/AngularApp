//This is the lawmaker service where http backend functions are created

//Importing Modules
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

//Importing created componenets
import { Lawmaker } from './lawmaker';

//defineing the class
@Injectable()
export class LawmakerService {

  	private lawmakersUrl = 'api/lawmakers';  // URL to web api\
  	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	//HTTP function for getting all the lawmakers/list
	getLawmakers(): Promise<Lawmaker[]> {
	  return this.http.get(this.lawmakersUrl)
	             .toPromise()
	             .then(response => response.json().data as Lawmaker[])
	             .catch(this.handleError);
	}
	//HTTP function to get specific lawmaker
	getLawmaker(id: number): Promise<Lawmaker> {
	  const url = `${this.lawmakersUrl}/${id}`;
	  return this.http.get(url)
	    .toPromise()
	    .then(response => response.json().data as Lawmaker)
	    .catch(this.handleError);
	}
	//HTTP function to update a lawmaker details
	update(lawmaker: Lawmaker): Promise<Lawmaker> {
	  const url = `${this.lawmakersUrl}/${lawmaker.id}`;
	  return this.http
	    .put(url, JSON.stringify(lawmaker), {headers: this.headers})
	    .toPromise()
	    .then(() => lawmaker)
	    .catch(this.handleError);
	}
	//HTTP function to create a new lawmaker
	create(name: string): Promise<Lawmaker> {
	  return this.http
	    .post(this.lawmakersUrl, JSON.stringify({name: name}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Lawmaker)
	    .catch(this.handleError);
	}
	//HTTP function to delete a lawmaker
	delete(id: number): Promise<void> {
	  const url = `${this.lawmakersUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}
	//Function to handle the error
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
	

}