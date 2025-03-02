import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { WebSocketService } from '../../../webSocket/web-socket.service';
import { MessageStateService } from '../../services/messages.service';

@Component({
  selector: 'user-messages',
  standalone: false,
  templateUrl: './user-messages.component.html',
  styleUrl: './user-messages.component.css'
})
export class UserMessagesComponent {

  mensajesRecibidos$: any;
  userId: number = Number(localStorage.getItem('user_id'));

  constructor(
    private location: Location,
    private webSocketService: WebSocketService,
    private messagesService: MessageStateService
  ){
    this.mensajesRecibidos$ = this.messagesService.messages$;
  }

  marcarMensajeLeido(messageId: number): void {
    this.webSocketService.emit('marcar-mensaje-leido', messageId, (response: any) => {
      if (response.status === 'success') {
        const currentMessages = this.messagesService.getMessages().filter((msg) => msg.id !== messageId);
        this.messagesService.updateMessages(currentMessages);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
