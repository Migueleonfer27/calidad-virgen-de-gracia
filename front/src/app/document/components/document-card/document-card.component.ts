import { Component, Input } from '@angular/core';
import { Document } from '../../interfaces/document.interface';

@Component({
  selector: 'document-card',
  standalone: false,

  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.css'
})
export class DocumentCardComponent {

  @Input()
    public document!: Document;

  openDocument(url: String) {
    if (url) {
      window.open(String(url), '_blank');
    } else {
      console.error("No hay URL disponible para este documento.");
    }
  }
}
