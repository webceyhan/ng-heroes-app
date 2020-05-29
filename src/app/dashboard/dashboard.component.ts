import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    heroes$: Observable<Hero[]>;

    constructor(private heroSvc: HeroService) {}

    ngOnInit(): void {
        this.heroes$ = this.heroSvc.getHeroes(3);
    }
}
