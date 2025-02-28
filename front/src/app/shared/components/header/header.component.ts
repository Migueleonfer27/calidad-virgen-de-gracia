// JAIME, DAN Y MIGUEL

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../../../../login/front/src/app/auth/services/token.service';
import { abilities } from '../../../utils/abilities';
import { AdminService } from '../../../admin/services/admin.service';

@Component({
  selector: 'shared-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  abilitiesByRole: string[] = [];

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    const role = this.tokenService.getSelectedRole();
    if (role) {
      this.adminService.getAbilitiesByRole(1).subscribe(response => { // CAMBIAR POR EL ID DEL ROL
        this.abilitiesByRole = response.data.abilities.map(ability => ability.description);
        console.log('Abilities del rol:', this.abilitiesByRole);
      });
    }

    const token = this.tokenService.getToken();
    if (token) {
      localStorage.setItem('token', token);
      const decodeToken = this.tokenService.decodeToken();
      if (decodeToken) {
        localStorage.setItem('user_id', decodeToken.uid.toString());
        localStorage.setItem('roles', JSON.stringify(decodeToken.roles));
      } else {
        console.error('El token no se pudo decodificar o no contiene uid');
      }
    } else {
      this.tokenService.clearSession();
      console.error('No se encontró el token');
    }
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    this.tokenService.setSessionActive(false);
    this.tokenService.removeToken();
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('user_id');
    localStorage.removeItem('roles');
    window.location.href = 'http://localhost:4300';
  }

  canBeSeen(abilitiesKeys: (keyof typeof abilities)[]): boolean {
    const abilityValues = abilitiesKeys.map(key => abilities[key]);
    return abilityValues.some(value => this.abilitiesByRole.includes(value));
  }
}
