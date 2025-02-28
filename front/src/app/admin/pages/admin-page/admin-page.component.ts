import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { map } from 'rxjs';
import { ResultAbilities } from '../../../auth/interfaces/auth.interface';
import { abilities } from '../../../utils/abilities';

@Component({
  selector: 'app-admin-page',
  standalone: false,

  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit {


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {


    this.verAbilities().subscribe(
      data => {
        console.log(data)
        this.router.navigate(['admin', data[0].path])
      }
    )

  }

  verAbilities() {
    return this.authService.getAbilitiesByRole(6).pipe(
      map((response: ResultAbilities) => {

        const userAbilities: string[] = response.data.abilities.map(ability => ability.description);
        const routes = [
          { path: 'usersList', abilities: [abilities.getUsers, abilities.deleteUser, abilities.updateUser, abilities.createUser] },
          { path: 'categories', abilities: [abilities.createCategory, abilities.deleteCategory, abilities.updateCategory] },
          { path: 'roles', abilities: [abilities.getRoles, abilities.deleteRol, abilities.updateRol, abilities.createRol, abilities.getAbilitiesByRol, abilities.getAbilitiesByUser, abilities.addAbilities] },
          { path: 'documents', abilities: [abilities.createDocument, abilities.deleteDocument, abilities.updateDocument] },
        ];


        const accessibleRoutes = routes.filter(route =>
          route.abilities.some(ability => userAbilities.includes(ability))
        );
        return accessibleRoutes
      })
    );
  }

}




