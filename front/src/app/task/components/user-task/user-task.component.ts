import { Component } from '@angular/core';
import { TaskList, UserAssigned } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-user-task',
  standalone: false,

  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  users?:UserAssigned[];
  task?:TaskList;

  constructor(taskService:TaskService){
    this.users=taskService.cacheStore!.userTask.users
    this.task=taskService.cacheStore!.userTask.task
  }
}
