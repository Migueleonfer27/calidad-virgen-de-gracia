import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Document } from '../../interfaces/document.interface';
import { DocumentService } from '../../services/document.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../../admin/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-document-table',
  standalone: false,
  templateUrl: './document-table.component.html',
  styleUrl: './document-table.component.css'
})
export class DocumentTableComponent implements OnInit {

  displayedColumns: string[] = ['#', 'name', 'code', 'subcategory', 'actions'];
  documents = new MatTableDataSource<Document>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private documentService: DocumentService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.documentService.getDocuments()
      .subscribe(response => {
        this.documents.data = response.data;
        this.documents.paginator = this.paginator;
    });
  }

  openDocument(url: String) {
    if (url) {
      window.open(String(url), '_blank');
    } else {
      console.error("No hay URL disponible para este documento.");
    }
  }

  onDelete(document: Document) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        message: `¿Estás seguro de que quieres eliminar este documento? ${document.name}`,
        button: 'Eliminar',
        closeBtn: 'Cancelar'
      },
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '400ms'
    });

    dialog.afterClosed().subscribe(response => {
      if (!response) {
        return;
      }

      this.documentService.deleteDocument(document).subscribe((response) => {
        if (response) {
          this.documents.data = this.documents.data.filter(doc => doc.id !== response.data.id)

          this.snackBar.open('El documento ha sido eliminado correctamente', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['main-snackbar']
          })
        } else {
          this.snackBar.open('Ha ocurrido un error. El documento no se ha podido eliminar.', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['main-snackbar']
          });
        }
      });
    });
  }
}
