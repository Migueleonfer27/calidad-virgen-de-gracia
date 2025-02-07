import { Component, Input } from '@angular/core';
import { Category } from '../../../category/interfaces/category';

@Component({
  selector: 'category-sidebar',
  standalone: false,

  templateUrl: './category-sidebar.component.html',
  styleUrl: './category-sidebar.component.css'
})
export class CategorySidebarComponent {

  @Input()
    public categories: Category[] = [];
}
