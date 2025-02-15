import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-options-categories',
  standalone: false,

  templateUrl: './options-categories.component.html',
  styleUrl: './options-categories.component.css'
})
export class OptionsCategoriesComponent {
  @Output() filterChange = new EventEmitter<{  subcategory: number }>();


 
}
