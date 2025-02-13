import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Document } from '../../../task/interfaces/task.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-documents-dialog',
  standalone: false,

  templateUrl: './documents-dialog.component.html',
  styleUrl: './documents-dialog.component.css',
})
export class DocumentsDialogComponent {
  documents: Document[] = [];
  selectedFile!: File;


  constructor(
    private pdfService: PdfService,
    private matSnackbar: MatSnackBar,
    public dialogRef: MatDialogRef<DocumentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string, button: string, dataDocs: { document: Document[] } }
  ) {
    this.documents = data.dataDocs.document;
  }

  async fillAndDownloadPdf(event: any) {
    const file = event.target.files[0];
    if (!file) {
      this.matSnackbar.open('Selecciona un archivo PDF', 'Cerrar', {
        duration: 3000
      });
      return;
    }

    if (file.type !== 'application/pdf') {
      this.matSnackbar.open('El archivo seleccionado no es un PDF', 'Cerrar', {
        duration: 3000
      });
      return;
    }

    const formData = {
      "NOMBRE DEL TUTOR": "Fernando",
    };

    this.pdfService.uploadAndFillPdf(file, formData).subscribe(
      (blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'documento_rellenado.pdf';
        link.click();
      },
      (error) => {
        console.error('Error al rellenar el PDF:', error);
        this.matSnackbar.open('Error al rellenar el PDF', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
