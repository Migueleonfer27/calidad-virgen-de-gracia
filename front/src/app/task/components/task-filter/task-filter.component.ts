import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() filterChange = new EventEmitter<{ status: string, role: string }>();

  roleFilter=new FormControl('');
  statusFilter=new FormControl('');
  rolesOption:Role[]=[]
  constructor(private adminService: AdminService){
    this.adminService.getRoles().subscribe((res) => {
      this.rolesOption = res.data;
    });
  }
  onFilterChange() {
    this.filterChange.emit({
      status: this.statusFilter.value!,
      role: this.roleFilter.value!
    });
  }
}
