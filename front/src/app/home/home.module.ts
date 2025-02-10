import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryModule } from '../category/category.module';
import { SubcategoryModule } from '../subcategory/subcategory.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CategoryDetailsComponent,
    CategorySidebarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    CategoryModule,
    SubcategoryModule
  ],
  exports: [
    HomePageComponent,
    CategoryDetailsComponent,
    CategorySidebarComponent
  ]
})
export class HomeModule { }
