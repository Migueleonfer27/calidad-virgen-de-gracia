import { Component } from '@angular/core';
import { KanbanService } from '../../services/kanban.service';
import { Task } from '../../interfaces/kanban.interfaces';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { DocumentsDialogComponent } from '../documents-dialog/documents-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-kanban-table',
  standalone: false,

  templateUrl: './kanban-table.component.html',
  styleUrl: './kanban-table.component.css'
})
export class KanbanTableComponent {
  todo: Task[] = [];
  done: Task[] = [];

  constructor(private kanbanService: KanbanService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    const userId = Number(localStorage.getItem('user_id'));

    this.kanbanService.getTasksById(userId).subscribe(response => {
      const formattedData = response.data.map(task => ({
        ...task,
        end_date: task.end_date.split(' ')[0].split('-').reverse().join('/')
      }));
      this.todo = formattedData.filter(task => task.TaskUser.state === 1);
      this.done = formattedData.filter(task => task.TaskUser.state === 2);
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
          this.snackBar.open(`Tarea actualizada con éxito`, 'Cerrar', { duration: 3000 })
        },
        error: (err) => this.snackBar.open('Error actualizando la tarea: ' + err)
      });
    }
  }

  deleteTask(id_task: number) {
    const confirmDelete = confirm("¿Estás seguro de que quieres eliminar esta tarea?"); // cambiar por dialog de confirmación
    if (!confirmDelete) return; // cambiar por dialog de confirmación
    const userId = Number(localStorage.getItem('user_id'));

    this.kanbanService.deleteTask(id_task, userId).subscribe({
      next: () => {
        this.todo = this.todo.filter(task => task.id !== id_task);
        this.done = this.done.filter(task => task.id !== id_task);
        this.snackBar.open('Tarea eliminada con éxito.', 'Cerrar', { duration: 3000 });
      },
      error: (err) => this.snackBar.open('Error al intentar eliminar la tarea.', err)
    });
  }

  openDialog() {
    this.dialog.open(DocumentsDialogComponent, {
      width: 'auto',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: { title: 'Documentos anexos', button: 'Cerrar', message: 'Esta es la documentación anexa que tienes que completar para rellenar la tarea.' }
    });
  }
}
