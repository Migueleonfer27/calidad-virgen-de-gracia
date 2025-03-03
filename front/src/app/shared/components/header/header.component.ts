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
  public abiltiesProfile= [
    abilities.uploadPicture,
    abilities.updatePassword,

  ];
  public abiltiesKanba= [
    abilities.downloadDocument,
    abilities.getMyTask,
    abilities.deleteMyTask,
    abilities.updateStateTask
  ];
  public abiltiesQuality= [
    abilities.getTasks,
    abilities.deleteTask,
    abilities.updateTask,
    abilities.createTask,
    abilities.updateStateTask,
  ];
  public abiltiesAdmin= [
    abilities.getUsers,
    abilities.createUser,
    abilities.updateUser,
    abilities.deleteUser,
    abilities.createCategory,
    abilities.updateCategory,
    abilities.deleteCategory,
    abilities.createSubcategory,
    abilities.updateSubcategory,
    abilities.deleteSubcategory,
    abilities.createDocument,
    abilities.updateDocument,
    abilities.deleteDocument,
    abilities.createRol,
    abilities.updateRol,
    abilities.deleteRol,
    abilities.getAbilitiesByRol,
    abilities.getAbilitiesByUser,
    abilities.getRoles,
    abilities.createMassiveUser,

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
        this.permissionView.loadAbilitiesByRole();
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

  canViewElement(abilitiesKeys:string []): boolean {

    return this.permissionView.canAccess(abilitiesKeys);
  }
}
