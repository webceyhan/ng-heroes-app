import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
    term$ = new Subject<string>();
    heroes$: Observable<Hero[]>;

    constructor(private heroSvc: HeroService) {}

    ngOnInit(): void {
        this.heroes$ = this.term$.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),
            // ignore new term if same as previous term
            distinctUntilChanged(),

            // switch to new search observable each time the term changes
            switchMap((term: string) => this.heroSvc.searchHeroes(term))
        );
    }

    onSearch(term: string) {
        this.term$.next(term);
    }
}
