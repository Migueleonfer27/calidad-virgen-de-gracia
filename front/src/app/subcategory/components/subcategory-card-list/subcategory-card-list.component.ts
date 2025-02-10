import { Component, Input } from '@angular/core';
import { Subcategory } from '../../interfaces/subcategory.interface';

@Component({
  selector: 'subcategory-card-list',
  standalone: false,

  templateUrl: './subcategory-card-list.component.html',
  styleUrl: './subcategory-card-list.component.css'
})
export class SubcategoryCardListComponent {

  @Input()
  public subcategories: Subcategory[] = [];

}
