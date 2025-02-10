import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormUserDialogComponent } from './components/form-user-dialog/form-user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CategoryModule } from '../category/category.module';
import { RouterModule } from '@angular/router';
import { SubcategoryModule } from '../subcategory/subcategory.module';
import { RoleListComponent } from './components/role-list/role-list.component';
import { FormRoleComponent } from './components/form-role-dialog/form-role-dialog.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminPageComponent,
    UserListComponent,
    FormUserDialogComponent,
    RoleListComponent,
    FormRoleComponent,
  ],
  imports: [
    CategoryModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    AdminRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule,
    AdminRoutingModule,
      SubcategoryModule,
      SharedModule
  ],
  exports:[
    AdminPageComponent,
    UserListComponent,
    FormUserDialogComponent,

  ]

})
export class AdminModule { }
