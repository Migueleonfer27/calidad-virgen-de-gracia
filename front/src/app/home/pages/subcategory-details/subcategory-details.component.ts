import { Component, OnInit } from '@angular/core';
import { Category } from '../../../category/interfaces/category';
import { Subcategory } from '../../../subcategory/interfaces/subcategory.interface';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../category/services/category.service';
import { SubcategoryService } from '../../../subcategory/services/subcategory.service';
import { switchMap } from 'rxjs';
import { DocumentService } from '../../../document/services/document.service';
import { Document } from '../../../document/interfaces/document.interface';

@Component({
  selector: 'app-subcategory-details',
  standalone: false,

  templateUrl: './subcategory-details.component.html',
  styleUrl: './subcategory-details.component.css'
})
export class SubcategoryDetailsComponent implements OnInit {

  public categories: Category[] = [];
  public subcategories: Subcategory[] = [];
  public documents: Document[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private documentService: DocumentService
  ){}

  ngOnInit(): void {
    this.categoryService.getCategories()
          .subscribe( categories => {
            this.categories = categories.data;
          })

        this.activatedRoute.params
          .pipe(
            switchMap(({id}) => this.subcategoryService.getSubcategoriesFromCategory(id))
          )
          .subscribe( (subcategories ) => {
            return this.subcategories = subcategories.data;
          })

        this.activatedRoute.params
          .pipe(
            switchMap(({id}) => this.documentService.getDocumentsFromSubcategory(id))
          )
          .subscribe( (documents) => {
            return this.documents = documents.data;
          })
  }

}
