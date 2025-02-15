import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../../category/services/category.service';
import { SubcategoryService } from '../../../subcategory/services/subcategory.service';
import { Subcategory } from '../../interfaces/document.interface';

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

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    public dialogRef: MatDialogRef<AddDocFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

      this.addDocsForm = this.fb.group({
        name: ['', Validators.required],
        code: ['', Validators.required],
        url: ['', Validators.required],
        id_subcategory: ['', Validators.required],
        autofilled: [false]
      })
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
}
