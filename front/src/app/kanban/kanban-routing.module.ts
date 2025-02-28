import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';
import { AbilitiesGuard } from '../auth/guards/abilities.guard';
import { abilities } from '../utils/abilities';

const routes: Routes = [
  {
    path: '',
    component: KanbanPageComponent,
    canMatch: [AbilitiesGuard],
    data: { abilities: [abilities.getMyTask,abilities.updateStateTask,abilities.deleteMyTask] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanRoutingModule { }
