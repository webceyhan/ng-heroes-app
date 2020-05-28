import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
     hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private heroSvc: HeroService,
        private location: Location
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.heroSvc.getHero(id).subscribe(hero => this.hero = hero);
    }

    goBack(): void{
        this.location.back();
    }
}
