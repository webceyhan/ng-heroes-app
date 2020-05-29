import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Hero } from './hero';
import { LogService } from './logs/log.service';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    private heroesUrl = 'api/heroes';

    constructor(private http: HttpClient, private logger: LogService) {}

    getHeroes(limit?: number): Observable<Hero[]> {
        this.log('fetched heroes');
        return this.http.get<Hero[]>(this.heroesUrl).pipe(
            tap(() => this.log('fetched heroes')),
            map((heroes) => heroes.slice(0, limit)),
            catchError(this.handleError<Hero[]>('getHeroes', []))
        );
    }

    getHero(id: number): Observable<Hero> {
        this.log(`fetched hero id=${id}`);
        return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
            tap(() => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    }

    updateHero(hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero).pipe(
            tap((_) => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('updateHero'))
        );
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero).pipe(
            tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
            catchError(this.handleError<Hero>('addHero'))
        );
    }

    deleteHero(hero: Hero | number): Observable<Hero> {
        const id = typeof hero === 'number' ? hero : hero.id;

        return this.http.delete<Hero>(`${this.heroesUrl}/${id}`).pipe(
            tap(() => this.log(`deleted hero id=${id}`)),
            catchError(this.handleError<Hero>('deleteHero'))
        );
    }

    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
            tap((x) =>
                x.length
                    ? this.log(`found heroes matching "${term}"`)
                    : this.log(`no heroes matching "${term}"`)
            ),
            catchError(this.handleError<Hero[]>('searchHeroes', []))
        );
    }

    // HELPERS /////////////////////////////////////////////////////////////////////////////////////

    private log(message: string) {
        this.logger.info('heroService: ' + message);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: better job of transforming error for user consumption
            this.logger.error(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
