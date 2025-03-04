import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryCardListComponent } from './components/category-card-list/category-card-list.component';
import { RouterModule } from '@angular/router';
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
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { CategoriesComponent } from './components/categoriesTable/categories-table.component';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    CategoriesComponent,
    EditDialogComponent,
    CategoryCardComponent,
    CategoryCardListComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    CategoryRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatRippleModule,
    MatTooltipModule,
    MatToolbarModule

  ],
  exports: [
    CategoriesComponent,
    EditDialogComponent,
    CategoryCardComponent,
    CategoryCardListComponent
  ]
})
export class CategoryModule { }
