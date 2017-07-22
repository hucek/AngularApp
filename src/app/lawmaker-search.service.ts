//Search service
//Importing Required modules
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//Importing lawmaker component
import { Lawmaker }           from './lawmaker';

//Defining the class
@Injectable()
export class LawmakerSearchService {

  constructor(private http: Http) {}

  //The main search function to call the HTTP backend API 
  search(term: string): Observable<Lawmaker[]> {
    return this.http
               .get(`api/lawmakers/?name=${term}`)
               .map(response => response.json().data as Lawmaker[]);
  }
}