import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserTaskComponent } from './components/user-task/user-task.component';
import {TaskRoutingModule} from './task-routing.module';
import { TaskFilterComponent } from './components/task-filter/task-filter.component'
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskTableComponent,
    TaskPageComponent,
    UserTaskComponent,
    TaskFilterComponent
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
    ReactiveFormsModule

  ],
  exports: [
    TaskTableComponent,
    TaskPageComponent,
    UserTaskComponent,
    TaskFilterComponent
  ]
})
export class TaskModule { }
