import { Component, OnInit } from '@angular/core';
import { Category } from '../../../category/interfaces/category.interface';
import { CategoryService } from '../../../category/services/category.service';

@Component({
  selector: 'home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  public categories: Category[] = [];

  constructor(private categoryService: CategoryService){}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getCategories()
      .subscribe( categories => {
        this.categories = categories.data;
      })
  }
}
