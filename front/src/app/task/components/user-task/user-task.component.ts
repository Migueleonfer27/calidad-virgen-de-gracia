import { Component } from '@angular/core';
import { Task, UserAssigned } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor(taskService:TaskService){
    this.dataSource= new MatTableDataSource(taskService.cacheStore!.userTask.users);
    this.task=taskService.cacheStore!.userTask.task
  }
}
