import { HeroService } from './../heroes/hero.service';
import { Hero } from './../classes/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
 
   // The constructor expects Angular to inject the HeroService into a private heroService property.
  constructor(private heroService: HeroService) { }
 
  //The ngOnInit() lifecycle hook calls getHeroes.
  ngOnInit() {
    this.getHeroes();
  }
 
  //This getHeroes returns the sliced list 
  //of heroes at positions 1 and 5, returning only four of the Top Heroes (2nd, 3rd, 4th, and 5th).
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
