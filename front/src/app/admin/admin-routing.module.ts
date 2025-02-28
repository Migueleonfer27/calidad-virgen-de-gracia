import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../category/components/categoriesTable/categories-table.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SubcategoryTableComponent } from '../subcategory/components/subcategory-table/subcategory-table.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { DocumentTableComponent } from '../document/components/document-table/document-table.component';
import { AbilitiesGuard } from '../auth/guards/abilities.guard';
import {abilities} from '../utils/abilities'

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'categories',
        component: CategoriesComponent,
        canMatch: [AbilitiesGuard],
        data: { abilities: [abilities.createCategory,abilities.deleteCategory,abilities.updateCategory] }
      },
      {
        path: 'usersList',
        component: UserListComponent,
        canMatch: [AbilitiesGuard],
        data: { abilities: [abilities.getUsers,abilities.deleteUser,abilities.updateUser,abilities.createUser] }
      },
      {
        path: 'roles',
        component: RoleListComponent,
        canMatch: [AbilitiesGuard],
        data: { abilities: [abilities.getRoles,abilities.deleteRol,abilities.updateRol,abilities.createRol,abilities.getAbilitiesByRol,abilities.getAbilitiesByUser,abilities.addAbilities,] }
      },
      {
        path: 'documents',
        component: DocumentTableComponent,
        canMatch: [AbilitiesGuard],
        data: { abilities: [abilities.createDocument,abilities.deleteDocument,abilities.updateDocument] }
      },
      { path: 'subcategory-table/:id/:name',
        component: SubcategoryTableComponent,
        canMatch: [AbilitiesGuard],
        data: { abilities: [abilities.createSubcategory,abilities.deleteSubcategory,abilities.updateSubcategory] }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
