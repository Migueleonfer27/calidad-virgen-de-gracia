import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Document } from '../../../task/interfaces/task.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PdfService } from '../../services/pdf.service';
import { AdminService } from '../../../admin/services/admin.service';

@Component({
  selector: 'app-documents-dialog',
  standalone: false,

  templateUrl: './documents-dialog.component.html',
  styleUrl: './documents-dialog.component.css',
})
export class DocumentsDialogComponent {
  documents: Document[] = [];
  user: any; // PRUEBA PDF

  constructor(
    private userService: AdminService,
    private pdfService: PdfService,
    private matSnackbar: MatSnackBar,
    public dialogRef: MatDialogRef<DocumentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string, button: string, dataDocs: { document: Document[] } }
  ) {
    this.documents = data.dataDocs.document;
  }

  ngOnInit() { // PRUEBA RELLENAR PDF
    this.userService.getUserForFillPdf(2).subscribe({
      next: (response) => {
        if (response && response.data) {
          this.user = response.data;
        } else {
          console.warn("No se encontró el usuario.");
        }
      },
      error: (err) => {
        console.error("Error al obtener el usuario:", err);
      }
    });
  }

  downloadPdf(doc: Document) {
    this.pdfService.uploadAndFillPdf(doc.url, this.user, doc.name).subscribe({
      next: response => {
        this.matSnackbar.open(response.mensaje, "Cerrar", { duration: 3000 });
      },
      error: error => {
        this.matSnackbar.open("Error al generar el PDF", "Cerrar", { duration: 3000 });
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
