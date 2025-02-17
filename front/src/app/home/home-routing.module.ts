import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SubcategoryDetailsComponent } from './pages/subcategory-details/subcategory-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: CategoryDetailsComponent
  },
  {
    path: 'details/:id',
    component: SubcategoryDetailsComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
