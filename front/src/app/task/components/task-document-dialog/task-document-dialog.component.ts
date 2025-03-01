import { Component, Inject } from '@angular/core';
import { Document, Task } from '../../interfaces/task.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-document-dialog',
  standalone: false,

  templateUrl: './task-document-dialog.component.html',
  styleUrl: './task-document-dialog.component.css'
})
export class TaskDocumentDialogComponent {
  task: Task;
  documents: Document[];


 constructor(private dialogRef: MatDialogRef<TaskDocumentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task; documents: Document[],info:String }){

      this.task=data.task
      this.documents=data.documents
      
    }

    close() {
      this.dialogRef.close();
    }
}
