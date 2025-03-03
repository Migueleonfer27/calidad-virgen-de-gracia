import { Component } from '@angular/core';
import { WebSocketService } from '../../../webSocket/web-socket.service';
import { MessageStateService } from '../../services/messages.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private webSocketService: WebSocketService,
    private messagesService: MessageStateService,
    private snackBar: MatSnackBar
  ){
    this.mensajesRecibidos$ = this.messagesService.messages$;
  }

  marcarMensajeLeido(messageId: number): void {
    this.webSocketService.emit('marcar-mensaje-leido', messageId, (response: any) => {
      if (response.status === 'success') {
        const currentMessages = this.messagesService.getMessages().filter((msg) => msg.id !== messageId);
        this.messagesService.updateMessages(currentMessages);
        this.snackBar.open('Mensaje marcado como leído correctamente.', 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        })
      }
    });
  }
}
