import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(private messageSvc: MessageService) {}

    getHeroes(): Observable<Hero[]> {
        this.messageSvc.add('heroService: fetched heroes');
        return of(HEROES);
    }

    getHero(id: number):Observable<Hero> {
        this.messageSvc.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }
}
