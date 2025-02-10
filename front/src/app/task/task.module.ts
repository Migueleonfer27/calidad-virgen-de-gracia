import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserTaskComponent } from './components/user-task/user-task.component';
import {TaskRoutingModule} from './task-routing.module';
import { TaskFilterComponent } from './components/task-filter/task-filter.component'
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskEditDialogComponent } from './components/task-edit-dialog/task-edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskDocumentDialogComponent } from './components/task-document-dialog/task-document-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { CardDocumentsComponent } from './components/card-documents/card-documents.component';


@NgModule({
  declarations: [
    TaskTableComponent,
    TaskPageComponent,
    UserTaskComponent,
    TaskFilterComponent,
    TaskEditDialogComponent,
    TaskDocumentDialogComponent,
    CardDocumentsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    TaskRoutingModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
     MatSnackBarModule,
    MatCardModule
  ],
  exports: [
    TaskTableComponent,
    TaskPageComponent,
    UserTaskComponent,
    TaskFilterComponent,
    TaskEditDialogComponent
  ]
})
export class TaskModule { }
