import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDropListGroup, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanTableComponent } from './components/kanban-table/kanban-table.component';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';


@NgModule({
  declarations: [
    KanbanTableComponent,
    KanbanPageComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    KanbanPageComponent,
    KanbanTableComponent
  ]
})
export class KanbanModule { }
