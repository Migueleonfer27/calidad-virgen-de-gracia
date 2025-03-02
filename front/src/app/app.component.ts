import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './webSocket/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    // Iniciar la conexión WebSocket al cargar la aplicación
    const userId = Number(localStorage.getItem('user_id'));
    if (userId) {
      this.webSocketService.loadUserMessages(userId).subscribe({
        next: (response) => {
          console.log('Mensajes cargados al iniciar la app:', response);
        },
        error: (err) => console.error('Error al cargar mensajes:', err),
      });
    }
  }
}
