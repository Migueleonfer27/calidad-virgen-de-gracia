import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TaskList, UserAssigned, CacheStore, UserTaskCache } from '../../interfaces/task.interface';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-table',
  standalone: false,

  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent {
  displayedColumns: string[] = [ 'description', 'end_date','accion'];
  dataSource = new MatTableDataSource<TaskList>([]);

  constructor(private taskService:TaskService, private router: Router){}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

 ngOnInit() {

        this.taskService.getTask()
       .subscribe(response => {

         this.dataSource = new MatTableDataSource(response.data);
         this.dataSource.paginator = this.paginator

       });
   }

   userAssigned(users: UserAssigned[], task:TaskList){

      this.taskService.saveUsers(users, task)
      this.router.navigate(['task','user-task']);
   }
}


