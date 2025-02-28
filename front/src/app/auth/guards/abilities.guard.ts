import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanMatch,
  GuardResult,
  MaybeAsync,
  Route,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { Ability } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AbilitiesGuard implements CanMatch {
  constructor(private router: Router, private authService: AuthService, private matSnackBar: MatSnackBar) { }


  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    return this.checkAbilities(route);
  }

   checkAbilities(route: Route): Observable<boolean> {
    let requiredAbilities: String[] = route?.data?.['abilities'] || [];

     return this.authService.getAbilitiesByRole(6).pipe(
      map(result => {
        const abilitiesRol = result.data.abilities;
         console.log(abilitiesRol)
         console.log(requiredAbilities)
        const hasAbilities = abilitiesRol.filter(ability =>requiredAbilities.includes(ability.description));

        if (hasAbilities.length==0) {
          this.matSnackBar.open('No estás autorizado.', 'Cerrar', { duration: 3000 });
          //this.router.navigate(['/']);
          return false;
        }

        return true;
      })
    );
  }
}
