import { Component, OnInit } from '@angular/core';
import { MessageStateService } from '../../services/messages.service';

@Component({
  selector: 'user-page',
  standalone: false,
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {

  mensajesRecibidos: any[] = [];
  badgeCount: number = 0;
  iconName: string = 'notifications';

  constructor(private messagesService: MessageStateService) {}

  ngOnInit(): void {
    this.messagesService.messages$.subscribe((messages) => {
      this.mensajesRecibidos = messages;
      this.badgeCount = this.mensajesRecibidos.length;
      this.iconName = this.badgeCount > 0 ? 'notifications_active' : 'notifications';
    });
  }

}
