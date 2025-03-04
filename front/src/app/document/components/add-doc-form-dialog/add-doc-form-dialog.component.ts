import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../../category/services/category.service';
import { SubcategoryService } from '../../../subcategory/services/subcategory.service';
import { Subcategory } from '../../interfaces/document.interface';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'add-doc-form-dialog',
  standalone: false,
  templateUrl: './add-doc-form-dialog.component.html',
  styleUrl: './add-doc-form-dialog.component.css'
})
export class AddDocFormDialogComponent implements OnInit {

  addDocsForm: FormGroup;
  categories: any[] = [];
  subcategories: { [key: number]: Subcategory[] } = {};
  isAutofilled: boolean = false;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private documentService: DocumentService,
    public dialogRef: MatDialogRef<AddDocFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addDocsForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100)
        ]
      ],
      code: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      ],
      url: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(1000),
          Validators.pattern(/^https:\/\/.*/)
        ]
      ],
      id_subcategory: ['', Validators.required],
      autofilled: [false]
    });
  }

  ngOnInit(): void {
      this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(response => {
      if (response.data) {
        this.categories = response.data.map(category => ({
          name: category.name,
          id: category.id,
          subcategories: []
        }));

        this.categories.forEach(category => {
          this.subcategoryService.getSubcategoriesFromCategory(category.id).subscribe(subRes => {
            if (subRes.data) {
              category.subcategories = subRes.data;
            }
          });
        });
      }
    });
  }

  save() {
    if (this.addDocsForm.valid) {
      this.dialogRef.close(this.addDocsForm.value);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onInput(controlName: string) {
    const control = this.addDocsForm.get(controlName);

    if (control) {
      control.markAsTouched();
      control.updateValueAndValidity();
    }

    const documentName = this.addDocsForm.controls['name'].value;

    this.documentService.isAutofilledDoc(documentName).subscribe((response) => {
      this.isAutofilled = response.status;
      if (!this.isAutofilled) {
        this.addDocsForm.get('autofilled')?.setValue(false);
      }
    })
  }
}
