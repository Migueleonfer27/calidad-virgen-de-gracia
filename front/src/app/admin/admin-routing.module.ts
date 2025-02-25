import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../category/components/categoriesTable/categories-table.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SubcategoryTableComponent } from '../subcategory/components/subcategory-table/subcategory-table.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { DocumentTableComponent } from '../document/components/document-table/document-table.component';
import { AbilitiesGuard } from '../auth/guards/abilities.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'usersList',
        component: UserListComponent,
        canActivate: [AbilitiesGuard],
        data: { abilities: ['Ver usuarios'] }
      },
      {
        path: 'roles',
        component: RoleListComponent,
        canActivate: [AbilitiesGuard],
        data: { abilities: ['Ver roles'] }
      },
      {
        path: 'documents',
        component: DocumentTableComponent
      },
      {
        path: '',
        redirectTo: 'usersList',
        pathMatch: 'full'
      },
      { path: 'subcategory-table/:id/:name',
        component: SubcategoryTableComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
