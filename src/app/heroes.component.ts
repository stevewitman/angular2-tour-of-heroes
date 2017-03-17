import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}



// import { Component, OnInit } from '@angular/core';
// import { Hero } from './hero';
// import { HeroService } from './hero.service';
// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styles: [],
//   providers: [HeroService]
// })
// export class AppComponent implements OnInit {
//   title = 'Tour of Heroes';
//   heroes: Hero[];
//   selectedHero: Hero;
//   constructor(private heroService: HeroService) { }
//   getHeroes(): void {
//     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//   }
//   ngOnInit(): void {
//     this.getHeroes();
//   }
//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }
// }