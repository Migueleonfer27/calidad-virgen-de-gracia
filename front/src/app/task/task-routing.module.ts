import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTaskComponent } from './components/user-task/user-task.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { TaskTableComponent } from './components/task-table/task-table.component';


const routes: Routes = [
  {
    path: '',
    component: TaskPageComponent,
    children: [
      {
        path: 'user-task',
        component: UserTaskComponent
      },
      {
        path: 'task-table',
        component: TaskTableComponent
      },
      {
        path: '',
        redirectTo: 'task-table',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {

}
