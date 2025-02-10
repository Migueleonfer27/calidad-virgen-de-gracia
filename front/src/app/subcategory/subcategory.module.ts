import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { SubcategoryCardListComponent } from './components/subcategory-card-list/subcategory-card-list.component';
import { SubcategoryCardComponent } from './components/subcategory-card/subcategory-card.component';
import { SubcategoryTableComponent } from './components/subcategory-table/subcategory-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EditSubcategoryDialogComponent } from './components/edit-subcategory-dialog/edit-subcategory-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategorySidebarComponent } from '../home/components/category-sidebar/category-sidebar.component';


@NgModule({
  declarations: [
    SubcategoryCardListComponent,
    SubcategoryCardComponent,
    SubcategoryTableComponent,
    EditSubcategoryDialogComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SubcategoryRoutingModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [
    SubcategoryCardListComponent,
    SubcategoryCardComponent
  ]
})
export class SubcategoryModule { }
