import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminService } from '../../../admin/services/admin.service';
import { Role } from '../../../admin/interfaces/user.interfaces';

@Component({
  selector: 'app-task-filter',
  standalone: false,

  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent {
  @Input() label="Filtrar por"
  @Input()  rolesOption:Role[]=[]
  @Input()  tableField=""
  @Output() filterChange = new EventEmitter<{  role: string }>();

  roleFilter=new FormControl('');

  constructor(private adminService: AdminService){
    
  }
  onFilterChange() {
    this.filterChange.emit({

      role: this.roleFilter.value!
    });
  }
}
