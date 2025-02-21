import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDropListGroup, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanTableComponent } from './components/kanban-table/kanban-table.component';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';
import { DocumentsDialogComponent } from './components/documents-dialog/documents-dialog.component';
import { MatTooltip } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    KanbanTableComponent,
    KanbanPageComponent,
    DocumentsDialogComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatButtonModule,
    MatCardModule,
    MatIcon,
    MatTooltip
  ],
  exports: [
    KanbanPageComponent,
    KanbanTableComponent,
    DocumentsDialogComponent
  ]
})
export class KanbanModule { }
