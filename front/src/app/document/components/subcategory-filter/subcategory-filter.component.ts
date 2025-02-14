import { Component, EventEmitter, Output } from '@angular/core';
import { Subcategory } from '../../interfaces/document.interface';
import { CategoryService } from '../../../category/services/category.service';
import { SubcategoryService } from '../../../subcategory/services/subcategory.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'doc-subcategory-filter',
  standalone: false,
  templateUrl: './subcategory-filter.component.html',
  styleUrl: './subcategory-filter.component.css'
})
export class SubcategoryFilterComponent {

  categories: any[] = [];
  subcategories: { [key: number]: Subcategory[] } = {};
  subcategoryFilterControl = new FormControl('');
  @Output() filterChange = new EventEmitter<string>();

  constructor(
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.subcategoryFilterControl.valueChanges.subscribe(value => {
      this.filterChange.emit(value!);
    });
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
}
