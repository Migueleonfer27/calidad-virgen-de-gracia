import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryModule } from '../category/category.module';
import { MaterialModule } from '../material/material.module';
import { SubcategoryModule } from '../subcategory/subcategory.module';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SubcategoryDetailsComponent } from './pages/subcategory-details/subcategory-details.component';
import { DocumentModule } from '../document/document.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CategoryDetailsComponent,
    CategorySidebarComponent,
    SubcategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoryModule,
    SubcategoryModule,
    DocumentModule,
    MaterialModule
  ],
  exports: [
    HomePageComponent,
    CategoryDetailsComponent,
    CategorySidebarComponent,
    SubcategoryDetailsComponent
  ]
})
export class HomeModule { }
