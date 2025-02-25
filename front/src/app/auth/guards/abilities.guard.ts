import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AdminService } from '../../admin/services/admin.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AbilitiesGuard implements CanActivate {
  constructor(private router: Router, private adminService: AdminService, private matSnackBar: MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    const requiredAbilities: string[] = route.data['abilities'] || [];

    return this.adminService.getAbilitiesByRole(2).pipe( // CAMBIAR EL NÚMERO POR EL ID DEL ROL DEL LOCALSTORAGE
      map((response) => {
        const rolAbilities = response.data.abilities.map(
          (ability) => ability.description
        );

        console.log('Abilities del usuario:', rolAbilities);
        console.log('Abilities requeridas:', requiredAbilities);

        const hasAbility = requiredAbilities.some((ability) =>
          rolAbilities.includes(ability)
        );

        if (hasAbility) return true;

        this.matSnackBar.open('No estás autorizado.', 'Cerrar', { duration: 3000 });

        return false;
      })
    );
  }
}
