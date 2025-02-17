import { Component, EventEmitter, Input, input, Output, ViewChild } from '@angular/core';
import { Role } from '../../../admin/interfaces/user.interfaces';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-radio-options',
  standalone: false,

  templateUrl: './radio-options.component.html',
  styleUrl: './radio-options.component.css'
})
export class RadioOptionsComponent {
@Input()  rolesOption:Role[]=[]
@Input() label:String=""
@Input() selectedType: number = 0; 

@Output() selectedTypeChange = new EventEmitter<number>(); // Notificar cambios al padre

displayedRoles: Role[] = [];
pageSize = 5;
currentPage = 0;

@ViewChild(MatPaginator) paginator!: MatPaginator;

ngOnInit() {
  this.updateDisplayedRoles();
}

updateDisplayedRoles() {
  const startIndex = this.currentPage * this.pageSize;
  this.displayedRoles = this.rolesOption.slice(startIndex, startIndex + this.pageSize);
}

onPageChange(event: PageEvent) {
  this.currentPage = event.pageIndex;
  this.pageSize = event.pageSize;
  this.updateDisplayedRoles();
}

emitSelection() {
  this.selectedTypeChange.emit(this.selectedType);
}
}
