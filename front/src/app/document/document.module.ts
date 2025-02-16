import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { DocumentTableComponent } from './components/document-table/document-table.component';
import { DocumentRoutingModule } from './document-routing.module';
import { AddDocFormDialogComponent } from './components/add-doc-form-dialog/add-doc-form-dialog.component';
import { EditDocFormDialogComponent } from './components/edit-doc-form-dialog/edit-doc-form-dialog.component';
import { SubcategoryFilterComponent } from './components/subcategory-filter/subcategory-filter.component';
import { DocumentCardListComponent } from './components/document-card-list/document-card-list.component';


@NgModule({
  declarations: [
    DocumentTableComponent,
    AddDocFormDialogComponent,
    EditDocFormDialogComponent,
    SubcategoryFilterComponent,
    DocumentCardListComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MaterialModule
  ],
  exports: [
    DocumentTableComponent,
    AddDocFormDialogComponent,
    EditDocFormDialogComponent,
    DocumentCardListComponent
  ]
})
export class DocumentModule { }
