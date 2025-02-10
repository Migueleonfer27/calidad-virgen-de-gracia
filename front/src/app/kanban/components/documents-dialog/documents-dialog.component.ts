import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Document } from '../../../task/interfaces/task.interface';
import { KanbanService } from '../../services/kanban.service';

@Component({
  selector: 'app-documents-dialog',
  standalone: false,

  templateUrl: './documents-dialog.component.html',
  styleUrl: './documents-dialog.component.css',
})
export class DocumentsDialogComponent {

  documents: Document[] = [];

  constructor(
    private kanbanService: KanbanService,
    public dialogRef: MatDialogRef<DocumentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string, button: string }
  ) {
    this.getDocuments()
  }

  getDocuments() {
    const userId = Number(localStorage.getItem('user_id'));

    this.kanbanService.getTasksById(userId).subscribe(response => {
      const tasksWithDocs = response.data.filter(task => task.Documents);
      tasksWithDocs.forEach(task => {
        this.documents.push(...task.Documents);
      });
      console.log(tasksWithDocs);
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
