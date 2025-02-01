import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Subcategory } from '../../../subcategory/interfaces/subcategory.interface';
import { SubcategoryService } from '../../../subcategory/services/subcategory.service';
import { CategoryService } from '../../../category/services/category.service';
import { Category } from '../../../category/interfaces/category';

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
    private subcategoryService: SubcategoryService,
    private location: Location
  ){}

  ngOnInit(): void {

    this.categoryService.getCategories()
      .subscribe( categories => {
        console.log(categories.data)
        this.categories = categories.data;
      })

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.subcategoryService.getSubcategoriesFromCategory(id))
      )
      .subscribe( (subcategories ) => {
        console.log(subcategories.data);

        return this.subcategories = subcategories.data;
      })
  }

  goBack(): void {
    this.location.back();
  }
}
