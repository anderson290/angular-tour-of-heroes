import { HeroService } from './../heroes/hero.service';
import { Component, OnInit, Input } from '@angular/core';
//importando a classe de heroi para ser usada
import { Hero } from '../classes/hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  //para puxar as propriedades de Hero que é externo
  @Input() hero: Hero;
  constructor(
    //The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent.
    private route: ActivatedRoute,
    //The HeroService gets hero data from the remote 
    //server and this component will use it to get the hero-to-display.
    private heroService: HeroService,
    //The location is an Angular service for interacting with the browser.
    // You'll use it later to navigate back to the view that navigated here.
    private location: Location
    ) { }

  ngOnInit() {
    this.getHero();
  }
  
  getHero(): void {
    const id = +this.route.snapshot.params.ParamMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
 
  goBack(): void {
    this.location.back();
  }
}
