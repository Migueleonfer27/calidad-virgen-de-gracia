import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task, TaskResponse } from '../interfaces/kanban.interfaces';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  private urlTask: string = `${environment.apiUrl}/task`

  constructor(private http: HttpClient) { }

  getTasksById(id: number): Observable<TaskResponse> {
    return this.http.get<TaskResponse>(`${this.urlTask}/getById/${id}`);
  }

  putTask(id_user: number, id_task: number, state: number): Observable<any> {
    return this.http.put<any>(`${this.urlTask}/updateState`, { id_user, id_task, state });
  }

  deleteTask(id_task: number, id_user: number): Observable<any> {
    return this.http.delete<any>(`${this.urlTask}/deleteFromUser`, { body: { id_task, id_user } });
  }
}
