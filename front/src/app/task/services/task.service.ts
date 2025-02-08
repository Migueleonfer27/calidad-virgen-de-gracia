import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CacheStore, ResponseTask, TaskList, UserAssigned } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    private _taskUrl: string = environment.apiUrl;
    private _taskPath: string = '/task';
    public cacheStore: CacheStore = {
      userTask: {
        users: [],
        task: undefined,
      }
    };
  constructor(private http: HttpClient) { }

   getTask(): Observable<ResponseTask> {
      const url = `${this._taskUrl}${this._taskPath}`;
      return this.http.get<ResponseTask>(url)
    }

     saveUsers(users: UserAssigned[], task:TaskList){
     
          this.cacheStore!.userTask.users=users
          this.cacheStore!.userTask.task=task

       }
}
