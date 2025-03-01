// Jaime Ortega y Miguel

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../../../../login/front/src/app/auth/services/token.service';
import { abilities } from '../../../utils/abilities';
import { PermissionViewService } from '../../services/permission-view.service';

@Component({
  selector: 'shared-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public abiltiesProfile: (keyof typeof abilities)[] = [
    'uploadPicture',
    'updatePassword',
  ];
  public abiltiesTask: (keyof typeof abilities)[] = [
    'getTasks',
    'getMyTask',
    'deleteMyTask',
    'deleteTask',
    'updateTask',
    'createTask',
    'updateStateTask',
  ];
  public abiltiesQuality: (keyof typeof abilities)[] = [
    'getTasks',
    'getMyTask',
    'deleteMyTask',
    'deleteTask',
    'updateTask',
    'createTask',
    'updateStateTask',
  ];
  public abiltiesAdmin: (keyof typeof abilities)[] = [
    'getUsers',
    'createUser',
    'updateUser',
    'deleteUser',
  ];

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private permissionView: PermissionViewService
  ) {}

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.permissionView.loadAbilitiesByRole();
    const role = this.tokenService.getSelectedRole();
    if (role) {
      localStorage.setItem('rol', JSON.stringify(role));
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

  logout(): void {
    this.tokenService.setSessionActive(false);
    this.tokenService.removeToken();
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('user_id');
    localStorage.removeItem('roles');
    window.location.href = 'http://localhost:4300';
  }

  canViewElement(abilitiesKeys: (keyof typeof abilities)[]): boolean {
    return this.permissionView.canAccess(abilitiesKeys);
  }
}
