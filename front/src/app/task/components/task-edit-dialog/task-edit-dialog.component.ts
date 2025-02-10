import { Component, Inject } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-edit-dialog',
  standalone: false,

  templateUrl: './task-edit-dialog.component.html',
  styleUrl: './task-edit-dialog.component.css'
})
export class TaskEditDialogComponent {

  startDate = new Date(1990, 0, 1);
  constructor(private dialogRef: MatDialogRef<TaskEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task) {
    const fechaSeleccionada = new Date(this.task.end_date); // Convertir a Date
    fechaSeleccionada.setMinutes(fechaSeleccionada.getMinutes() + fechaSeleccionada.getTimezoneOffset());
    this.task.end_date = fechaSeleccionada;
    this.startDate = new Date(this.task.end_date);
  }

  ngOnInit(): void {

  }
  validate(): boolean {
    return this.task.description.length > 0
  }
  init() {
    if (this.validate()) {
      this.dialogRef.close(this.task);
    }


  }

  close() {
    this.dialogRef.close();
  }

}
