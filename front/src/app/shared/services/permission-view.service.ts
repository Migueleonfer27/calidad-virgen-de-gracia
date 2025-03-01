// Miguel

import { Injectable } from '@angular/core';
import { AdminService } from '../../admin/services/admin.service';
import { abilities } from '../../utils/abilities';

@Injectable({
  providedIn: 'root'
})
export class PermissionViewService {
  private abilitiesByRole: string[] = [];
  private rolId = 1; // CAMBIAR POR VALOR LOCAL STORAGE

  constructor(
    private adminService: AdminService
  ) { }

  loadAbilitiesByRole(): void {
    this.adminService.getAbilitiesByRole(this.rolId).subscribe(response => {
      this.abilitiesByRole = response.data.abilities.map(ability => ability.description);
    });
  }

  canAccess(abilitiesKeys: (keyof typeof abilities)[]): boolean {
    const abilityValues = abilitiesKeys.map((key) => abilities[key]);
    return abilityValues.some((value) => this.abilitiesByRole.includes(value));
  }
}
