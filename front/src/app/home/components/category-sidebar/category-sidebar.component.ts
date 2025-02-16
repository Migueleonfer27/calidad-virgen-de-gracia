import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from '../../../category/interfaces/category';
import { Subcategory } from '../../../subcategory/interfaces/subcategory.interface';

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
}
