import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';

const routes: Routes = [
  {
    path: '',
    component: KanbanPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanRoutingModule { }
