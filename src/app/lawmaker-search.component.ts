import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { LawmakerSearchService } from './lawmaker-search.service';
import { Lawmaker } from './lawmaker';

@Component({
  selector: 'lawmaker-search',
  templateUrl: './lawmaker-search.component.html',
  styleUrls: [ './lawmaker-search.component.css' ],
  providers: [LawmakerSearchService]
})
export class LawmakerSearchComponent implements OnInit {
  lawmakers: Observable<Lawmaker[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private lawmakerSearchService: LawmakerSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.lawmakers = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.lawmakerSearchService.search(term)
        // or the observable of empty lawmaker if there was no search term
        : Observable.of<Lawmaker[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Lawmaker[]>([]);
      });
  }

  gotoDetail(lawmaker: Lawmaker): void {
    let link = ['/detail', lawmaker.id];
    this.router.navigate(link);
  }
}