import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-abilities-dialog',
  standalone: false,
  templateUrl: './abilities-dialog.component.html',
  styleUrl: './abilities-dialog.component.css',
})
export class AbilitiesDialogComponent {
  dataSource: MatTableDataSource<string>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<AbilitiesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { abilities: string[] },
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.data.abilities);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  toggleAbility(ability: any) {
    ability.checked = !ability.checked;
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: '¿Estás seguro de que quieres asignar estos permisos al rol?',
        button: 'Confirmar',
        closeBtn: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.closeDialog();
      }
    });
  }
}
