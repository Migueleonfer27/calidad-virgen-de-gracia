import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Task, UserAssigned, CacheStore, UserTaskCache } from '../../interfaces/task.interface';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { AdminService } from '../../../admin/services/admin.service';
import { Role } from '../../../admin/interfaces/user.interfaces';

@Component({
  selector: 'app-task-table',
  standalone: false,

  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent {
  displayedColumns: string[] = [ 'description','type', 'end_date','accion'];
  dataSource = new MatTableDataSource<Task>([]);
  rolesOption:Role[]= [];
  filteredData: Task[] = [];

  constructor(private taskService:TaskService, private router: Router, private adminService:AdminService){
    this.adminService.getRoles().subscribe((res) => {
      this.rolesOption = res.data;
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
   
  }


 ngOnInit() {

        this.taskService.getTask()
       .subscribe(response => {

         this.dataSource = new MatTableDataSource(response.data);
         this.filteredData=response.data;
         this.dataSource.paginator = this.paginator

       });
   }

   applyFilter(filterValue: { role: string }) {
    if (!filterValue.role || filterValue.role=="0") {
      this.dataSource.data = this.filteredData;
    } else {
      this.dataSource.data = this.filteredData.filter(
        (task) => task.type == parseInt(filterValue.role)
      );
    }
  }
   userAssigned(users: UserAssigned[], task:Task){

      this.taskService.saveUsers(users, task)
      this.router.navigate(['/task','user-task']);
   }

   getRoleDescription(idRol: number) {

    if(idRol!=null){
      return this.rolesOption.find(r => r.id === idRol)?.position;
    }

  return null

  }
}


