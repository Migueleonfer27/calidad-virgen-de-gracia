import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { MessageStateService } from '../profile/services/messages.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: Socket;

  constructor(
    private messageStateService: MessageStateService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.socket = io('http://localhost:8090', {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
      transports: ['websocket', 'polling']
    });

    this.socket.on('recibir-mensaje', (payload: any) => {
      const userId = Number(localStorage.getItem('user_id'));
      if (payload.userId === userId) {
        const currentMessages = this.messageStateService.getMessages();
        this.messageStateService.updateMessages([payload, ...currentMessages]);
        this.mostrarNotificacion('🔔 ¡Tienes un nuevo mensaje!');
      }
    });
  }

  mostrarNotificacion(mensaje: string): void {
    const audio = new Audio('/audio/notification.mp3');
    audio.play();

    this.snackBar.open(mensaje, 'Ir al mensaje', {
      duration: 5500,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    }).onAction().subscribe(() => {
      this.router.navigate(['/profile/userMessages'])
    })
  }

  public listen(eventName: string): Observable<any> {
    return new Observable((observer) => {
      this.socket.on(eventName, (data: any) => {
        observer.next(data);
      });
    });
  }

  public emit(eventName: string, data: any, callback?: (response: any) => void): void {
    if (callback) {
      this.socket.emit(eventName, data, callback);
    } else {
      this.socket.emit(eventName, data);
    }
  }

  public loadUserMessages(userId: number): Observable<any> {
    return new Observable((observer) => {
      this.socket.emit('cargar-mensajes', userId, (response: any) => {
        observer.next(response);
      });
    });
  }

  public disconnect(): void {
    this.socket.disconnect();
  }

}
