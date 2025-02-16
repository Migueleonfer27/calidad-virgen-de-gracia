import { Component, Input } from '@angular/core';
import { Role } from '../../interfaces/role.interface'

@Component({
  selector: 'roles-card',
  standalone: false,
  templateUrl: './roles-card.component.html',
  styleUrl: './roles-card.component.css'
})
export class RolesCardComponent {
  @Input()
  public role!: Role
}
