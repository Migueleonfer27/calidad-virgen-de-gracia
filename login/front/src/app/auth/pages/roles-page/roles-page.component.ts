// Jaime Ortega
import { Component } from '@angular/core'
import { Role } from '../../interfaces/role.interface'
import { TokenService } from '../../services/token.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'roles-page',
  standalone: false,
  templateUrl: './roles-page.component.html',
  styleUrl: './roles-page.component.css'
})
export class RolesPageComponent {
  public roles: Role[] = []

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit() {
    this.roles = this.tokenService.getUserRoles();
  }

  navigateToLogin() {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
