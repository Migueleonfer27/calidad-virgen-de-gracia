import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subcategory } from '../../../subcategory/interfaces/subcategory.interface';
import { CategoryService } from '../../../category/services/category.service';
import { SubcategoryService } from '../../../subcategory/services/subcategory.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-options-categories',
  standalone: false,

  templateUrl: './options-categories.component.html',
  styleUrl: './options-categories.component.css'
})
export class OptionsCategoriesComponent {
  @Input() thirdForm!: FormGroup;
  @Output() subcategorySelected = new EventEmitter<number>();
  categories: any[] = [];
  subcategories: { [key: number]: Subcategory[] } = {};
 constructor(
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,

  ){}
  ngOnInit() {
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

  onSubcategoryChange(event:any) {
    this.subcategorySelected.emit(event.value); // Emite el id_subcategory
  }
}
