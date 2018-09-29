import { MessageService } from './message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //irá injetar o serviço quando o componente for criado
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}  
