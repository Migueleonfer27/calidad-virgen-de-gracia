import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './webSocket/web-socket.service';
import { MessageStateService } from './profile/services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    private webSocketService: WebSocketService,
    private messageStateService: MessageStateService
  ) {}

  ngOnInit(): void {
    const userId = Number(localStorage.getItem('user_id'));
    if (userId) {
      // Cargar mensajes al iniciar la aplicación
      this.webSocketService.loadUserMessages(userId).subscribe({
        next: (response) => {
          console.log('Mensajes cargados al iniciar la app:', response);
          // Actualizar el estado con los mensajes cargados
          this.messageStateService.updateMessages(response.mensajes);
        },
        error: (err) => console.error('Error al cargar mensajes:', err),
      });
    }
  }
}
