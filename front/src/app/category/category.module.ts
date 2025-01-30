import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryCardListComponent } from './components/category-card-list/category-card-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CategoryCardComponent,
    CategoryCardListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CategoryRoutingModule,
    MatCardModule
  ],
  exports: [
    CategoryCardComponent,
    CategoryCardListComponent
  ]
})
export class CategoryModule { }
