import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CacheStore, Document, DocumentBySub, EditResponse, RequestInsertByRol, RequestInsertByUser, ResponseTask, Task, UserAssigned } from '../interfaces/task.interface';


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

  getDocumentBySubcategory(id_subcategory: number){
    const url = `${this._taskUrl}/documents/getBySubcategoryId/`;
    return this.http.get<DocumentBySub>(`${url}${id_subcategory}`)
  }

  saveTaskByUser(task:RequestInsertByUser){
    const url = `${this._taskUrl}${this._taskPath}/insert`;
    return this.http.post<ResponseTask>(`${url}`,task)
  }

  saveTaskByRol(task:RequestInsertByRol){
    const url = `${this._taskUrl}${this._taskPath}/insertByRole`;
    return this.http.post<ResponseTask>(`${url}`,task)
  }
}
