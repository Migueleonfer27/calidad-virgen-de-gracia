import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { WebSocketService } from '../../../webSocket/web-socket.service';
import { MessageStateService } from '../../services/messages.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'user-messages',
  standalone: false,
  templateUrl: './user-messages.component.html',
  styleUrl: './user-messages.component.css'
})
export class UserMessagesComponent implements OnInit {

  mensajesRecibidos: any[] = []; // Almacena los mensajes recibidos
  mensaje: string = '';
  userId: number = Number(localStorage.getItem('user_id'));

  constructor(
    private location: Location,
    private webSocketService: WebSocketService,
    private messagesService: MessageStateService,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    // Cargar mensajes existentes al iniciar
    this.webSocketService.loadUserMessages(this.userId).subscribe({
      next: (response) => {
        console.log('Mensajes cargados desde BD:', response);
        this.mensajesRecibidos = response.mensajes;
        this.messagesService.updateMessages(this.mensajesRecibidos);
      },
      error: (err) => console.error('Error al cargar mensajes:', err)
    });

    // Escuchar nuevos mensajes
    this.webSocketService.listen('recibir-mensaje').subscribe((payload: any) => {
      if (payload.userId === this.userId) {
        this.mensajesRecibidos.push(payload);
        this.messagesService.updateMessages(this.mensajesRecibidos);
        this.mostrarNotificacion('🔔 ¡Tienes un nuevo mensaje!');
      }
    });
  }

  enviarMensaje(): void {
    if (this.mensaje.trim()) {
      const payload = {
        subject: 'Asunto del mensaje',
        message: this.mensaje,
        userId: 2
      };

      // Enviar el mensaje al servidor
      this.webSocketService.emit('enviar-mensaje', payload);
      this.mensaje = '';
    }
  }

  marcarMensajeLeido(messageId: number): void {
    this.webSocketService.emit('marcar-mensaje-leido', messageId, (response: any) => {
      if (response.status === 'success') {
        console.log('Mensaje marcado como leído:', response.message);

        // Actualizar la lista de mensajes en el frontend
        this.mensajesRecibidos = this.mensajesRecibidos.filter(msg => msg.id !== messageId);
        this.messagesService.updateMessages(this.mensajesRecibidos);
      } else {
        console.error('Error al marcar el mensaje como leído:', response.error);
      }
    });
  }

  mostrarNotificacion(mensaje: any): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 5500,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-notificacion']
    });
  }

  goBack(): void {
    this.location.back();
  }
}
