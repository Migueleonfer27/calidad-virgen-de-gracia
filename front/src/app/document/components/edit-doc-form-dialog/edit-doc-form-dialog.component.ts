import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'edit-doc-form-dialog',
  standalone: false,
  templateUrl: './edit-doc-form-dialog.component.html',
  styleUrl: './edit-doc-form-dialog.component.css'
})
export class EditDocFormDialogComponent {
  editDocsForm: FormGroup;
  isAutofilled: boolean = false;

  constructor(
    private fb: FormBuilder,
    private documentService: DocumentService,
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
          Validators.maxLength(20)
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

    const documentName = this.editDocsForm.controls['name'].value;

    this.documentService.isAutofilledDoc(documentName).subscribe((response) => {
      this.isAutofilled = response.status
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

    const documentName = this.editDocsForm.controls['name'].value;

    this.documentService.isAutofilledDoc(documentName).subscribe((response) => {
      this.isAutofilled = response.status;
      if (!this.isAutofilled) {
        this.editDocsForm.get('autofilled')?.setValue(false);
      }
    })
  }
}
