import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  messages: string[] = [];
 
  //adicionar mensagem
  add(message: string) {
    this.messages.push(message);
  }
   //limpar mensagem
  clear() {
    this.messages = [];
  }
} 