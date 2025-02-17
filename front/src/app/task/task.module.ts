import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
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
import { CreateTaskComponent } from './components/create-task/create-task.component';
import {MatStepperModule} from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { RadioOptionsComponent } from './components/radio-options/radio-options.component';
import { OptionsCategoriesComponent } from './components/options-categories/options-categories.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    TaskTableComponent,
    TaskPageComponent,
    UserTaskComponent,
    TaskFilterComponent,
    TaskEditDialogComponent,
    TaskDocumentDialogComponent,
    CardDocumentsComponent,
    CreateTaskComponent,
    RadioOptionsComponent,
    OptionsCategoriesComponent,

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
    MatCardModule,
    MatStepperModule,
    MatRadioModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
  exports: [
    TaskTableComponent,
    TaskPageComponent,
    UserTaskComponent,
    TaskFilterComponent,
    TaskEditDialogComponent,
    CreateTaskComponent
  ]
})
export class TaskModule { }
