import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    DocumentTableComponent
  ]
})
export class DocumentModule { }
