import { Component, ViewChild } from '@angular/core';
import { Task, UserAssigned } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from '../../../admin/interfaces/user.interfaces';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-task',
  standalone: false,

  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  displayedColumns: string[] = [ 'user', 'state'];
  dataSource=new MatTableDataSource<UserAssigned>([]);
  task?:Task;
  filterOptions:Role[]=[{"id":1, "position":"Pendiente"},{"id":2, "position":"Finalizado"}]
  filteredData:UserAssigned[]=[]
  constructor(taskService:TaskService){
    this.dataSource= new MatTableDataSource(taskService.cacheStore!.userTask.users);
    this.task=taskService.cacheStore!.userTask.task
    this.filteredData=taskService.cacheStore!.userTask.users!
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  applyFilter(filterValue: { role: string }) {
    if (!filterValue.role || filterValue.role=="0") {
      this.dataSource.data = this.filteredData;
    } else {
      this.dataSource.data = this.filteredData.filter(
        (users) => users.TaskUser.state == parseInt(filterValue.role)
      );
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
}
