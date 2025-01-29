import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryCardComponent } from './components/category-card/category-card.component';


@NgModule({
  declarations: [
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatCardModule
  ],
  exports: [
    CategoryCardComponent
  ]
})
export class CategoryModule { }
