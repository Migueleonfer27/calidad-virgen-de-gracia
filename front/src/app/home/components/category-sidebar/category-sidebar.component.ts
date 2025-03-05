import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from '../../../category/interfaces/category';
import { Subcategory } from '../../../subcategory/interfaces/subcategory.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'category-sidebar',
  standalone: false,
  templateUrl: './category-sidebar.component.html',
  styleUrl: './category-sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorySidebarComponent {

  @Input()
    public categories: Category[] = [];

  @Input()
  public subcategories: Subcategory[] = [];

  constructor(private router: Router) {}

  navigateToCategory(categoryId: number) {
    this.router.navigate(['/category', categoryId]);
  }

  navigateToSubcategory(subcategoryId: number) {
    this.router.navigate(['/subcategory/details', subcategoryId]);
  }
}
