import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { DocumentTableComponent } from './components/document-table/document-table.component';
import { DocumentRoutingModule } from './document-routing.module';
import { AddDocFormDialogComponent } from './components/add-doc-form-dialog/add-doc-form-dialog.component';


@NgModule({
  declarations: [
    DocumentTableComponent,
    AddDocFormDialogComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MaterialModule
  ],
  exports: [
    DocumentTableComponent,
    AddDocFormDialogComponent
  ]
})
export class DocumentModule { }
