// Miguel

import { Injectable } from '@angular/core';
import { AdminService } from '../../admin/services/admin.service';
import { abilities } from '../../utils/abilities';

@Injectable({
  providedIn: 'root'
})
export class PermissionViewService {
  private abilitiesByRole: string[] = [];
  private rol = JSON.parse(localStorage.getItem("rol")!);
  private rolId = this.rol?.role_id;

  constructor(
    private adminService: AdminService
  ) { }

  loadAbilitiesByRole(): void {
    console.log(this.rolId)
    this.adminService.getAbilitiesByRole(this.rolId).subscribe(response => {
      this.abilitiesByRole = response.data.abilities.map(ability => ability.description);
    });
  }

  canAccess(abilitiesKeys: string[]): boolean {

    return abilitiesKeys.some((value) => this.abilitiesByRole.includes(value));
  }
}
