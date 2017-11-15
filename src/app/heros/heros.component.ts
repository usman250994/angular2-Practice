import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Routes } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {
  myBool = false;
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  // checking whther the url is specific for displaying route.. else blocked
   if (this.router.url === '/heroes/test123')  {

 this.myBool = true;
 console.log(this.myBool);
     }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
