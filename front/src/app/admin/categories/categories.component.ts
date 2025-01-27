import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../interfaces/category';
@Component({
  selector: 'app-categories',
  standalone: false,
  
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private service: CategoriesService){}

  ngOnInit(): void {
    this.service.showAll()
    console.log(this.service.categoriesList)
  }

 get categories(): Category[]{
  return this.service.categoriesList;
 }
}
