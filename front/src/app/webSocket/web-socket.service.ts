import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:8090', {
      reconnection: true, // Habilitar reconexión automática
      reconnectionAttempts: 5, // Intentos máximos
      reconnectionDelay: 2000, // Tiempo entre intentos (ms)
      transports: ['websocket', 'polling'] // Forzar uso de WebSocket primero
    });
  }

  // Escucha mensajes entrantes
  public listen(eventName: string): Observable<any> {
    return new Observable((observer) => {
      this.socket.on(eventName, (data: any) => {
        observer.next(data);
      });
    });
  }

  // Envía mensajes al servidor
  public emit(eventName: string, data: any, callback?: (response: any) => void): void {
    if (callback) {
      this.socket.emit(eventName, data, callback);
    } else {
      this.socket.emit(eventName, data);
    }
  }

  // Cargar mensajes del usuario
  public loadUserMessages(userId: number): Observable<any> {
    return new Observable((observer) => {
      this.socket.emit('cargar-mensajes', userId, (response: any) => {
        observer.next(response);
      });
    });
  }

  // Cierra la conexión
  public disconnect(): void {
    this.socket.disconnect();
  }

}
