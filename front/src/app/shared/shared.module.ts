import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../admin/components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ConfirmDialogComponent

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ConfirmDialogComponent

  ]
})
export class SharedModule { }
