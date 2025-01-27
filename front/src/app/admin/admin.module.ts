import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    CategoriesComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdminPageComponent
  ]
  
})
export class AdminModule { }
