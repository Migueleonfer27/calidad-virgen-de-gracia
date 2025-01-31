import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CategoryModule } from '../category/category.module';

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
