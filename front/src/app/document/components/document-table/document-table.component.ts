import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Document } from '../../interfaces/document.interface';
import { DocumentService } from '../../services/document.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { AddDocFormDialogComponent } from '../add-doc-form-dialog/add-doc-form-dialog.component';
import { EditDocFormDialogComponent } from '../edit-doc-form-dialog/edit-doc-form-dialog.component';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-document-table',
  standalone: false,
  templateUrl: './document-table.component.html',
  styleUrl: './document-table.component.css'
})
export class DocumentTableComponent implements OnInit {

  displayedColumns: string[] = ['#', 'name', 'code', 'subcategory', 'autofilled', 'actions'];
  documents = new MatTableDataSource<Document>([]);
  subcategoryFilterControl = new FormControl('');

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private documentService: DocumentService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.documentService.getDocuments()
      .subscribe(response => {
        this.documents.data = response.data;
        this.documents.paginator = this.paginator;
        this.documents.sort = this.sort;

        this.documents.filterPredicate = (data: Document, filter: string) => {
          return data.subcategory.id.toString() === filter;
        };

        this.documents.sortingDataAccessor = (data, sortHeaderName) => {
          switch (sortHeaderName) {
            case 'subcategory':
              return data.subcategory.name;
            default:
              return data[sortHeaderName];
          }
        };
      });
  }

  onFilterChange(subcategoryId: string): void {
    const subcategoryIdNumber = Number(subcategoryId);

    if (isNaN(subcategoryIdNumber) || subcategoryIdNumber === 0) {
      this.documents.filter = '';

    } else {
      this.documents.filter = subcategoryIdNumber.toString();
    }
  }

  openDocument(url: String) {
    if (url) {
      window.open(String(url), '_blank');
    } else {
      console.error("No hay URL disponible para este documento.");
    }
  }

  onNewDocument() {
    const dialog = this.dialog.open(AddDocFormDialogComponent, {
      width: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        title: 'Añadir documento',
        button: 'Añadir',
        closeBtn: 'Cancelar',
        message: 'Complete el formulario para añadir un nuevo documento al sistema.'
      }
    });

    dialog.afterClosed().subscribe((document) => {
      if (document) {
        this.documentService.addDocument(document).subscribe({
          next: (response) => {
            this.documents.data = [...this.documents.data, response.data];
            this.documents.paginator = this.paginator;
            this.documents._updateChangeSubscription();
            this.snackBar.open('Documento añadido correctamente.', 'Cerrar', { duration: 3000 });
          },
          error: (error) => {
            this.snackBar.open('Ha ocurrido un error. No se ha podido añadir el documento.', 'Cerrar', { duration: 3000 });
          }
        });
      }
    });
  }

  onUpdate(document: Document) {
    const dialog = this.dialog.open(EditDocFormDialogComponent, {
      width: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        title: 'Editar documento',
        document: { ...document },
        button: 'Guardar',
        closeBtn: 'Cancelar',
        message: 'Modifica el formulario para editar los datos del documento.'
      }
    });

    dialog.afterClosed().subscribe((updatedDocument) => {
      if (updatedDocument) {
        this.documentService.editDocument(updatedDocument).subscribe({
          next: (response) => {
            const index = this.documents.data.findIndex(doc => doc.id === response.data.id);
            if (index > -1) {
              this.documents.data[index] = response.data;
              this.documents._updateChangeSubscription();
            }
            this.snackBar.open('Documento actualizado correctamente.', 'Cerrar', { duration: 3000 });
          },
          error: () => {
            this.snackBar.open('Ha ocurrido un error al actualizar el documento.', 'Cerrar', { duration: 3000 });
          }
        });
      }
    });
  }

  onDelete(document: Document) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        message: '¿Estás seguro de que quieres eliminar este documento?',
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
          this.documents.data = this.documents.data.filter(doc => doc.id !== response.data.id);
          this.documents._updateChangeSubscription();  // Forzar actualización tras eliminar
          this.snackBar.open('El documento ha sido eliminado correctamente', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['main-snackbar']
          });
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
