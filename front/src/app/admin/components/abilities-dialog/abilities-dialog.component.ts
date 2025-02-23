import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
    @Inject(MAT_DIALOG_DATA) public data: { abilities: string[] }
  ) {
    this.dataSource = new MatTableDataSource(this.data.abilities);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
