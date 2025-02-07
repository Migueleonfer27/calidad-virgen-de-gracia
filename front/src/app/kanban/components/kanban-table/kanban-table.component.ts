import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-table',
  standalone: false,

  templateUrl: './kanban-table.component.html',
  styleUrl: './kanban-table.component.css'
})
export class KanbanTableComponent {
  todo = ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 3'];
  done = ['Tarea 4', 'Tarea 5', 'Tarea 6'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
