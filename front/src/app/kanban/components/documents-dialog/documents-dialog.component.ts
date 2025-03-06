import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Document } from '../../../task/interfaces/task.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PdfService } from '../../services/pdf.service';
import { AdminService } from '../../../admin/services/admin.service';
import { abilities } from '../../../utils/abilities';
import { PermissionViewService } from '../../../shared/services/permission-view.service';

@Component({
  selector: 'app-documents-dialog',
  standalone: false,

  templateUrl: './documents-dialog.component.html',
  styleUrl: './documents-dialog.component.css',
})
export class DocumentsDialogComponent {
  documents: Document[] = [];
  user: any; // PRUEBA PDF
  abilities=abilities

  constructor(
    private permissionView: PermissionViewService,
    private userService: AdminService,
    private pdfService: PdfService,
    private matSnackbar: MatSnackBar,
    public dialogRef: MatDialogRef<DocumentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string, button: string, dataDocs: { document: Document[] } }
  ) {
    this.documents = data.dataDocs.document;
  }

  ngOnInit() {
    this.userService.getUserForFillPdf(Number(localStorage.getItem('user_id'))).subscribe({
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

  canViewElement(abilitiesKeys: string[]): boolean {
    return this.permissionView.canAccess(abilitiesKeys);
  }
}
