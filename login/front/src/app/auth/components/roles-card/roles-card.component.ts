// Jaime Ortega
import { Component, Input } from '@angular/core';
import { Role } from '../../interfaces/role.interface'
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'roles-card',
  standalone: false,
  templateUrl: './roles-card.component.html',
  styleUrl: './roles-card.component.css'
})
export class RolesCardComponent {
  @Input()
  public role!: Role

  constructor(private tokenService: TokenService) {}

  selectRole(role: Role): void {
    this.tokenService.setSelectedRole(role)
    localStorage.setItem('rol', JSON.stringify(role))
    window.location.href = 'http://localhost:4200'
  }
}
