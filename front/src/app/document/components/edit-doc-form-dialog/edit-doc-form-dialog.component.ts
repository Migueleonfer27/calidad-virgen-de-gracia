import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'edit-doc-form-dialog',
  standalone: false,
  templateUrl: './edit-doc-form-dialog.component.html',
  styleUrl: './edit-doc-form-dialog.component.css'
})
export class EditDocFormDialogComponent {
  editDocsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDocFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.editDocsForm = this.fb.group({
      name: [this.data.document.name, Validators.required],
      code: [this.data.document.code, Validators.required],
      url: [this.data.document.url, Validators.required],
      autofilled: [this.data.document.autofilled]
    })
  }

  save() {
    if (this.editDocsForm.valid) {
      const updatedDocument = {
        id: this.data.document.id,      
        ...this.editDocsForm.value
      };
      this.dialogRef.close(updatedDocument);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
