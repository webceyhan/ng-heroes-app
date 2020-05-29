import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    private messages$ = new BehaviorSubject<string[]>([]);

    constructor() {}

    list() {
        return this.messages$.asObservable();
    }

    add(message: string) {
        this.messages$.next([...this.messages$.value, message]);
    }

    clear() {
        this.messages$.next([]);
    }
}
