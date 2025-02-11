import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Document } from '../../../task/interfaces/task.interface';
import { KanbanService } from '../../services/kanban.service';
import { PdfService } from '../../services/pdf.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private pdfService: PdfService,
    private matSnackbar: MatSnackBar,
    public dialogRef: MatDialogRef<DocumentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string, button: string, dataDocs: { document: Document[] } }
  ) {
    this.documents = data.dataDocs.document;
  }

  async onDownloadPdf(pdfUrl: string) {
    try {
      await this.pdfService.downloadPdfFromUrl(pdfUrl, 'documento.pdf');
      this.matSnackbar.open('PDF descargado correctamente', 'Cerrar', { duration: 3000 });
    } catch (error) {
      this.matSnackbar.open('Error al descargar el PDF', 'Cerrar', { duration: 3000 });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
