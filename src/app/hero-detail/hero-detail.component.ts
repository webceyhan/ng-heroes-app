import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
    hero: Hero = {} as any;

    constructor(
        private router:Router,
        private route: ActivatedRoute,
        private heroSvc: HeroService,

    ) {}

    ngOnInit(): void {
        this.route.params
            .pipe(
                map((params) => +params.id),
                switchMap((id) => this.heroSvc.getHero(id))
            )
            .subscribe((hero) => (this.hero = hero));
    }

    onSave(): void {
        this.heroSvc.updateHero(this.hero).subscribe();
        this.onCancel();
    }

    onCancel(): void {
        this.router.navigate(['..'], { relativeTo: this.route });
    }
}
