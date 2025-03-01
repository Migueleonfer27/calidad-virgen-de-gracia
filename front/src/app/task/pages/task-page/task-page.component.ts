import { Component } from '@angular/core';
import { PermissionViewService } from '../../../shared/services/permission-view.service';
import { abilities } from '../../../utils/abilities';

@Component({
  selector: 'app-task-page',
  standalone: false,

  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {
  abilities=abilities
  constructor( private permissionView: PermissionViewService){}
  canViewElement(abilitiesKeys: string[]): boolean {
    return this.permissionView.canAccess(abilitiesKeys);
  }
}
