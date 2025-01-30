import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { SubcategoryCardListComponent } from './components/subcategory-card-list/subcategory-card-list.component';
import { SubcategoryCardComponent } from './components/subcategory-card/subcategory-card.component';


@NgModule({
  declarations: [
    SubcategoryCardListComponent,
    SubcategoryCardComponent
  ],
  imports: [
    CommonModule,
    SubcategoryRoutingModule,
    MatCardModule
  ],
  exports: [
    SubcategoryCardListComponent,
    SubcategoryCardComponent
  ]
})
export class SubcategoryModule { }
