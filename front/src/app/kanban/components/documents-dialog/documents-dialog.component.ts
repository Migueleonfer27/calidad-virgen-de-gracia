import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-documents-dialog',
  standalone: false,

  templateUrl: './documents-dialog.component.html',
  styleUrl: './documents-dialog.component.css',
})
export class DocumentsDialogComponent {
  // A la espera de la API para los documentos
  urlDocumentList: string[] = [
    'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EZJJmVaizDhKlHJsiHoHTK4BUvJMcbtrw9LdKGwL_R7PLA?e=FhPjaI',
    'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EU7EJQX0B2tCl_X9lkReIVABCNyX4nBRsFgvjfXW7GSYzg?e=tOjCcV',
    'https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EbxVUD7sSdlDhOjQaD6fVkEB3ZNlAmKES97tvTfpJ5jmNA?e=p4NnrK',
    'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EcNDSD6bMulJrV12zwlKy44BOUPZxJ9fV5cCqtFPGKnj-g?e=RFDJqx',
    'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EcC8qG9lp2ZJihTs1sN4nZQBXvaD1rsvz3KW1DkrdKHRzQ?e=3le5jd'
  ];

  constructor(
    public dialogRef: MatDialogRef<DocumentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string, button: string }
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
