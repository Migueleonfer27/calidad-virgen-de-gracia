import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTaskComponent } from './components/user-task/user-task.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { AbilitiesGuard } from '../auth/guards/abilities.guard';
import { abilities } from '../utils/abilities';


const routes: Routes = [
  {
    path: '',
    component: TaskPageComponent,
    canMatch: [AbilitiesGuard],
    data: { abilities: [abilities.getTasks]},
    children: [
      {
        path: 'user-task',
        component: UserTaskComponent,
        canMatch: [AbilitiesGuard],
        data: { abilities: [abilities.getTasks]}
      },
      {
        path: 'create-task',
        component: CreateTaskComponent,
        canMatch: [AbilitiesGuard],
        data: { abilities: [abilities.createTask]}
      },
      {
        path: 'task-table',
        component: TaskTableComponent,
        canMatch: [AbilitiesGuard],
        data: { abilities: [abilities.getTasks]}
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
