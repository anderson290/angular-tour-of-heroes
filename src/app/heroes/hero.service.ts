import { MessageService } from './../messages/message.service';
import { Hero } from './../classes/hero';
import { HEROES } from './../classes/mock-heroes';
import { Observable } from 'rxjs/Rx'; // this line rises a tslint err
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';

@Injectable()

export class HeroService {
  
  //injetando servico de mensagem
  constructor(private messageService: MessageService) { }

  //metodo para retornar os mock-heroes

  //utilizando o observable
  getHeroes(): Observable<Hero[]> {
  // TODO: manda a mensagem quando todos os herois forem buscados
    this.messageService.add('HeroService: herois buscados');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: Heroi buscado pelo hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

