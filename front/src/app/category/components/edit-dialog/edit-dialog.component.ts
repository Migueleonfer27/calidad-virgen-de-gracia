import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef, MatDialogActions
} from '@angular/material/dialog';
import { Category } from '../../interfaces/category';
import { MatFormField  } from '@angular/material/form-field';

@Component({
  selector: 'app-edit-dialog',
  standalone: false,

  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css'
})
export class EditDialogComponent {
  constructor( private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public category: Category){

    }

ngOnInit(): void {

}
validate(): boolean {
  return this.category.name.length>0
}
init() {
if(this.validate()){
  this.dialogRef.close(true);
}

}

close() {
this.dialogRef.close();
}
}
