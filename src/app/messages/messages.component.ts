import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {

    messages$: Observable<string[]>;


    constructor(private messageSvc: MessageService) {}

    ngOnInit(): void {
        this.messages$ = this.messageSvc.list();
    }

    onClear() {
        this.messageSvc.clear();
    }
}
