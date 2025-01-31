import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../category/components/categoriesTable/categories-table.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [

  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'usersList',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
