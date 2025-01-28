import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: false,

  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.css'
})
export class EditUserDialogComponent {
  constructor(public dialog: MatDialog) {
    this.dialog.open(EditUserDialogComponent, {
      width: '250px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
