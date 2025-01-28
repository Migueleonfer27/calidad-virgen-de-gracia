import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { UserList, ApiResponse, User } from '../interfaces/user.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private urlUsers: string = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.urlUsers);
  }

  getUser(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.urlUsers}/${id}`);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlUsers, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.urlUsers}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<UserList> {
    return this.http.delete<UserList>(`${this.urlUsers}/${id}`);
  }
}
