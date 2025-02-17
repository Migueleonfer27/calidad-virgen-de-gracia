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
      name: [
        this.data.document.name,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100)
        ]
      ],
      code: [
        this.data.document.code,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(6)
        ]
      ],
      url: [
        this.data.document.url,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(1000),
          Validators.pattern(/^https:\/\/.*/)
        ]
      ],
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

  onInput(controlName: string) {
    const control = this.editDocsForm.get(controlName);
    if (control) {
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }

}
