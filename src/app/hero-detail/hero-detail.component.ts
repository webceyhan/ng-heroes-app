import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
    hero: Hero = {} as any;

    constructor(
        private route: ActivatedRoute,
        private heroSvc: HeroService,
        private location: Location
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.heroSvc.getHero(id).subscribe((hero) => (this.hero = hero));
    }

    save(): void {
        this.heroSvc.updateHero(this.hero).subscribe(() => this.goBack());
    }

    remove(): void {
        this.heroSvc.updateHero(this.hero).subscribe(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
