import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageStateService {
  private messagesSubject = new BehaviorSubject<any[]>([]);
  messages$ = this.messagesSubject.asObservable();

  constructor() {}

  updateMessages(messages: any[]): void {
    this.messagesSubject.next(messages);
  }

  getMessages(): any[] {
    return this.messagesSubject.value;
  }
}
