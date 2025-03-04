// Miguel

import { Injectable } from '@angular/core';
import { AdminService } from '../../admin/services/admin.service';
import { abilities } from '../../utils/abilities';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionViewService {
  private abilitiesByRole: string[] = [];

  private rolId = 0

  constructor(
    private adminService: AdminService
  ) {
    
   }

  loadAbilitiesByRole(): void {

    const rol = JSON.parse(localStorage.getItem("rol")!);
    this.rolId=rol?.role_id;
    console.log(this.rolId)
    this.adminService.getAbilitiesByRole(this.rolId).subscribe(response => {
      this.abilitiesByRole = response.data.abilities.map(ability => ability.description);
    });
  }

  canAccess(abilitiesKeys: string[]): boolean {

    return abilitiesKeys.some((value) => this.abilitiesByRole.includes(value));
  }
}
