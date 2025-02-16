import { Component, OnInit } from '@angular/core'
import { Role } from '../../interfaces/role.interface'
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'roles-page',
  standalone: false,
  templateUrl: './roles-page.component.html',
  styleUrl: './roles-page.component.css'
})
export class RolesPageComponent {
  public roles: Role[] = []

  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    this.roles = this.tokenService.getUserRoles();
  }
}
