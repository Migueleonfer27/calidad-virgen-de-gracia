import { Component, Input } from '@angular/core';
import { Subcategory } from '../../interfaces/subcategory.interface';

@Component({
  selector: 'subcategory-card',
  standalone: false,

  templateUrl: './subcategory-card.component.html',
  styleUrl: './subcategory-card.component.css'
})
export class SubcategoryCardComponent {

  @Input()
  public subcategory!: Subcategory;
  
}
