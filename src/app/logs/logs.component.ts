import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LogService } from '../log.service';
import { Log } from '../log';

@Component({
    selector: 'app-logs',
    templateUrl: './logs.component.html',
    styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
    logs$: Observable<Log[]>;

    constructor(private logger: LogService) {}

    ngOnInit(): void {
        this.logs$ = this.logger.list();
    }

    onClear() {
        this.logger.clear();
    }
}
