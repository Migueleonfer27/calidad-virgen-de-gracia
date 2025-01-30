import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './pages/components/admin-page/admin-page.component';
import { CategoriesComponent } from '../category/components/categoriesTable/categories-table.component';

import { CategoryModule } from '../category/category.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AdminPageComponent,


  ],
  imports: [
    CommonModule,
    CategoryModule
  ],
  exports:[
    AdminPageComponent
  ]

})
export class AdminModule { }
