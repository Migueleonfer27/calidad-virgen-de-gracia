import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Category } from '../../../category/interfaces/category';
import { CategoryService } from '../../../category/services/category.service';
import { Subcategory } from '../../../subcategory/interfaces/subcategory.interface';
import { SubcategoryService } from '../../../subcategory/services/subcategory.service';

@Component({
  selector: 'app-category-details',
  standalone: false,
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent implements OnInit {

  public categories: Category[] = [];
  public subcategories: Subcategory[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService
  ){}

  ngOnInit(): void {

    this.categoryService.getCategories()
      .subscribe( categories => {
        this.categories = categories.data;
      })

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.subcategoryService.getSubcategoriesFromCategory(id))
      )
      .subscribe( (subcategories ) => {
        return this.subcategories = subcategories.data;
      })
  }
}
