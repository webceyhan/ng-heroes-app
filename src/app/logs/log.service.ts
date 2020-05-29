import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Log } from './log';

@Injectable({
    providedIn: 'root',
})
export class LogService {
    private logs$ = new BehaviorSubject<Log[]>([]);

    constructor() {}

    list() {
        return this.logs$.asObservable();
    }

    add(message: string) {
        const timestamp = new Date().getTime();
        const log: Log = { message, timestamp };

        this.logs$.next([...this.logs$.value, log]);
    }

    clear() {
        this.logs$.next([]);
    }
}
