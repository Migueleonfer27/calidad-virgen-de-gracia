import { Component, Input } from '@angular/core';
import { Document } from '../../interfaces/task.interface';

@Component({
  selector: 'app-card-documents',
  standalone: false,

  templateUrl: './card-documents.component.html',
  styleUrl: './card-documents.component.css'
})
export class CardDocumentsComponent {
@Input() docu:Document={ id:0,
  name:"No existen documentos asociados a esta tarea",
  code:"",
  url:""}
}
