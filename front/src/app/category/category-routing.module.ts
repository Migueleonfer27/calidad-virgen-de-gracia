import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCardListComponent } from './components/category-card-list/category-card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryCardListComponent
  },
  // {
  //   path: ':id',
  //   component: ''
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
