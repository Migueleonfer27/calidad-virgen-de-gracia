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

@Output() selectedTypeChange = new EventEmitter<number>();

displayedRoles: Role[] = [];
pageSize = 5;
pageIndex = 0;
filteredRoles: Role[] = [];

@ViewChild(MatPaginator) paginator!: MatPaginator;

ngOnInit() {
  this.filteredRoles = [...this.rolesOption];
  this.updateDisplayedRoles();
}

updateDisplayedRoles() {
  const startIndex = this.pageIndex * this.pageSize;
  this.displayedRoles = this.filteredRoles.slice(startIndex, startIndex + this.pageSize);  
}

onPageChange(event: PageEvent) {
  this.pageIndex = event.pageIndex;
  this.pageSize = event.pageSize;
  this.updateDisplayedRoles();
}
filter(event: any): void {
  const searchTerm = event.target.value.toLowerCase();
  if (searchTerm) {

    this.filteredRoles = this.rolesOption.filter(role =>
      role.position.toLowerCase().includes(searchTerm)
    );
    this.pageIndex = 0;
  } else {

    this.filteredRoles = [...this.rolesOption];
  }
  this.updateDisplayedRoles();
}
emitSelection() {
  this.selectedTypeChange.emit(this.selectedType);
}
}
