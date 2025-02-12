import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Document } from '../../interfaces/document.interface';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-document-table',
  standalone: false,
  templateUrl: './document-table.component.html',
  styleUrl: './document-table.component.css'
})
export class DocumentTableComponent implements OnInit {

  displayedColumns: string[] = ['#', 'name', 'code', 'subcategory', 'actions'];
  documents = new MatTableDataSource<Document>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.getDocuments().subscribe(response => {
      this.documents.data = response.data;
      this.documents.paginator = this.paginator;
    });
  }
}
