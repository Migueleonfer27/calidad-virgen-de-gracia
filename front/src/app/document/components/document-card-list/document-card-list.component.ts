import { Component, Input } from '@angular/core';
import { Document } from '../../interfaces/document.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'document-card-list',
  standalone: false,
  templateUrl: './document-card-list.component.html',
  styleUrl: './document-card-list.component.css'
})
export class DocumentCardListComponent {

  @Input()
  public documents: Document[] = [];

  constructor(private location: Location){}

  goBack(): void {
    this.location.back();
  }
}
