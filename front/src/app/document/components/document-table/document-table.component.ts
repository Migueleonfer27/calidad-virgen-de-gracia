import { Component, OnInit } from '@angular/core';
import { Document } from '../../interfaces/document.interface';
import { DocumentService } from '../../services/document.service';
import { SubcategoryService } from '../../../subcategory/services/subcategory.service';

@Component({
  selector: 'app-document-table',
  standalone: false,
  templateUrl: './document-table.component.html',
  styleUrl: './document-table.component.css'
})
export class DocumentTableComponent implements OnInit {

  documents: Document[] = [];
  displayedColumns: String[] = ['#', 'name', 'code', 'subcategory', 'actions'];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {

      this.documentService.getDocuments()
        .subscribe(response => {
          this.documents = response.data;
        })
  }
}
