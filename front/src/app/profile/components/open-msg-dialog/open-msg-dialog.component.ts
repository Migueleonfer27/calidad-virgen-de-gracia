import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-open-msg-dialog',
  standalone: false,
  templateUrl: './open-msg-dialog.component.html',
  styleUrl: './open-msg-dialog.component.css'
})
export class OpenMsgDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<OpenMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close() {
    this.dialogRef.close()
  }
}
