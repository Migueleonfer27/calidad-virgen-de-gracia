import { Component } from '@angular/core';
import { KanbanService } from '../../services/kanban.service';
import { Task } from '../../interfaces/kanban.interfaces';
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
  todo: Task[] = [];
  done: Task[] = [];

  constructor(private kanbanService: KanbanService) { }

  ngOnInit() {
    const userId = Number(localStorage.getItem('user_id'));

    this.kanbanService.getTasks().subscribe(response => {
      this.todo = response.data.filter(task =>
        task.Users.some(user => user.id === userId && user.TaskUser.state === 1)
      );

      this.done = response.data.filter(task =>
        task.Users.some(user => user.id === userId && user.TaskUser.state === 2)
      );
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const userId = Number(localStorage.getItem('user_id'));
      const task = event.previousContainer.data[event.previousIndex];
      const state: number = event.container.id === 'doneList' ? 2 : 1;

      this.kanbanService.putTask(userId, task.id, state).subscribe({
        next: () => {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
          );
          console.log(`Tarea actualizada con éxito a estado ${state}`) // cambiar por matsnackbar
        },
        error: (err) => console.error('Error actualizando la tarea:', err) // cambiar por matsnackbar
      });
    }
  }

  deleteTask(id_task: number) {
    const userId = Number(localStorage.getItem('user_id'));

    this.kanbanService.deleteTask(id_task, userId).subscribe({
      next: () => {
        this.todo = this.todo.filter(task => task.id !== id_task);
        this.done = this.done.filter(task => task.id !== id_task);
        console.log('Tarea eliminada con éxito.'); // cambiar por matsnackbar
      },
      error: (err) => console.error('Error al intentar eliminar la tarea.', err) // cambiar por matsnackbar
    });
  }
}
