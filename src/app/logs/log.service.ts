import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Log, LogType } from './log';

@Injectable({
    providedIn: 'root',
})
export class LogService {
    private logs$ = new BehaviorSubject<Log[]>([]);

    constructor() {}

    list() {
        return this.logs$.asObservable();
    }

    info(message: string): void {
        this.add(message, 'info');
    }

    warning(message: string): void {
        this.add(message, 'warning');
    }

    error(message: string): void {
        this.add(message, 'error');
    }

    clear() {
        this.logs$.next([]);
    }

    // HELPERS /////////////////////////////////////////////////////////////////////////////////////

    private add(message: string, type: LogType = 'info') {
        const timestamp = new Date().getTime();
        const log: Log = { type, message, timestamp };

        this.logs$.next([...this.logs$.value, log]);
    }
}
