import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = [
        { id: 1, name: 'Narco' },
        { id: 2, name: 'Bombasto' },
        { id: 3, name: 'Celeritas' },
        { id: 4, name: 'Magneta' },
    ];
    constructor() {}

    ngOnInit(): void {}
}
