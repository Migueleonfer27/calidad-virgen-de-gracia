import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CacheStore, Document, EditResponse, ResponseTask, Task, UserAssigned } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _taskUrl: string = environment.apiUrl;
  private _taskPath: string = '/task';
  public cacheStore: CacheStore = {
    userTask: {
      users: [],
      documents:[],
      task: undefined,
    }
  };
  constructor(private http: HttpClient) { }

  getTask(): Observable<ResponseTask> {
    const url = `${this._taskUrl}${this._taskPath}`;
    return this.http.get<ResponseTask>(url)
  }

  saveUsers(users: UserAssigned[], task: Task) {

    this.cacheStore!.userTask.users = users
    this.cacheStore!.userTask.task = task

  }
  /*saveDocuments(documents: Document[], task: Task) {
    this.cacheStore!.userTask.documents = documents
    this.cacheStore!.userTask.task = task
  }*/
  editTask(task: Task) {
    const url = `${this._taskUrl}${this._taskPath}`;
    return this.http.put<EditResponse>(`${url}`,task)
  }

  deleteTask(task: Task) {
    const url = `${this._taskUrl}${this._taskPath}/delete`;
    return this.http.delete<EditResponse>(`${url}/${task.id}`)
  }
}
