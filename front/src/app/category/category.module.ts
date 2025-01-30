import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule,MatSort } from '@angular/material/sort';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CategoriesComponent } from './components/categoriesTable/categories-table.component';
import {MatPaginator} from '@angular/material/paginator';


@NgModule({
  declarations: [
    CategoriesComponent,
    EditDialogComponent,
      AddCategoryComponent


  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule
  ],
  exports: [
    MatIcon,
    CategoriesComponent,
    EditDialogComponent,
    AddCategoryComponent
  ]
})
export class CategoryModule { }
