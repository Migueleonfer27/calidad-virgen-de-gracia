import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'category-card',
  standalone: false,

  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {

  @Input()
  public category!: Category;
}
