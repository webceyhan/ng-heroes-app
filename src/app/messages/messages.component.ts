import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Observable } from 'rxjs';
import { Log } from '../log';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {

    logs$: Observable<Log[]>;


    constructor(private logger: LogService) {}

    ngOnInit(): void {
        this.logs$ = this.logger.list();
    }

    onClear() {
        this.logger.clear();
    }
}
