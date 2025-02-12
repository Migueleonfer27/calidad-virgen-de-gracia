import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DocumentTableComponent } from './components/document-table/document-table.component';
import { DocumentRoutingModule } from './document-routing.module';


@NgModule({
  declarations: [
    DocumentTableComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    DocumentTableComponent
  ]
})
export class DocumentModule { }
