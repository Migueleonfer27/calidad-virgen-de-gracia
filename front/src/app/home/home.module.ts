import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryModule } from '../category/category.module';


@NgModule({
  declarations: [
    HomePageComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoryModule
  ],
  exports: [
    HomePageComponent,
    CategoryDetailsComponent
  ]
})
export class HomeModule { }
