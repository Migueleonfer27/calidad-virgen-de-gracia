import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'category-card-list',
  standalone: false,

  templateUrl: './category-card-list.component.html',
  styleUrl: './category-card-list.component.css'
})
export class CategoryCardListComponent {

  @Input()
  public categories: Category[] = [];

}
