import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../category/components/categoriesTable/categories-table.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SubcategoryTableComponent } from '../subcategory/components/subcategory-table/subcategory-table.component';

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
        component: UserListComponent
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
