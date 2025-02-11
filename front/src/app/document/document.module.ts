import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentTableComponent } from './components/document-table/document-table.component';


@NgModule({
  declarations: [
    DocumentTableComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule
  ],
  exports: [
    DocumentTableComponent
  ]
})
export class DocumentModule { }
