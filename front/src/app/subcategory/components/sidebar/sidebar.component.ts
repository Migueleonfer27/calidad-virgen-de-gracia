import { Component, Input, input } from '@angular/core';
import { Category } from '../../../category/interfaces/category.interface';

@Component({
  selector: 'app-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
@Input() categories:Category[]=[]
}
