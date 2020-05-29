import { Component, OnInit, Input } from '@angular/core';

import { Hero } from 'src/app/hero';

@Component({
    selector: 'app-hero-cards',
    templateUrl: './hero-cards.component.html',
    styleUrls: ['./hero-cards.component.css'],
})
export class HeroCardsComponent implements OnInit {
    @Input() heroes: Hero[];

    constructor() {}

    ngOnInit(): void {}
}
