import { Component } from '@angular/core';
import { WebSocketService } from '../../../webSocket/web-socket.service';
import { MessageStateService } from '../../services/messages.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OpenMsgDialogComponent } from '../open-msg-dialog/open-msg-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ){
    this.mensajesRecibidos$ = this.messagesService.messages$;
    console.log(this.mensajesRecibidos$.source._value)
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

  openMessage(message: any) {
      this.dialog.open(OpenMsgDialogComponent, {
        width: '500px',
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
        data: { message, title: 'Mensaje recibido', closeBtn: 'Cerrar' }
      });
    }
}
