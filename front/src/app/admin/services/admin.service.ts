import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { UserList, ApiResponse, User, Role, ApiResponseRoles, ApiResponseForFillPdf } from '../interfaces/user.interfaces';
import { Response, ResponseAbilities } from '../interfaces/abilities.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private urlUsers: string = `${environment.apiUrl}/users`;
  private urlRoles: string = `${environment.apiUrl}/roles`;
  private urlUserRoles: string = `${environment.apiUrl}/users/roles`;
  private urlAbilities: string = `${environment.apiUrl}/abilities`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.urlUsers);
  }

  getUser(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.urlUsers}/${id}`);
  }

  getUserForFillPdf(id: number): Observable<ApiResponseForFillPdf> { // PRUEBA RELLENAR PDF
    return this.http.get<ApiResponseForFillPdf>(`${this.urlUsers}/${id}`);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlUsers, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.urlUsers}/${id}`, user);
  }

  deleteUser(id: number): Observable<UserList> {
    return this.http.delete<UserList>(`${this.urlUsers}/${id}`);
  }

  getRoles(): Observable<ApiResponseRoles> {
    return this.http.get<ApiResponseRoles>(this.urlRoles);
  }

  addRole(user_id: number, role_id: number): Observable<Role> {
    return this.http.post<Role>(`${this.urlUserRoles}`, { user_id, role_id });
  }

  removeAssignedRole(user_id: number, role_id: number): Observable<Role> {
    return this.http.delete<Role>(`${this.urlUserRoles}/${user_id}/${role_id}`);
  }

  getRolesForTable(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.urlRoles}`);
  }

  postRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.urlRoles, role);
  }

  updateRole(id: number, role: Role): Observable<Role> {
    return this.http.put<Role>(`${this.urlRoles}/${id}`, role);
  }

  deleteRole(id: number): Observable<Role> {
    return this.http.delete<Role>(`${this.urlRoles}/${id}`);
  }

  postCsv(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.urlUsers}/massive`, formData);
  }

  getAllAbilities(): Observable<ResponseAbilities> {
    return this.http.get<ResponseAbilities>(this.urlAbilities);
  }

  getAbilitiesByRole(idRole: number): Observable<Response> {
    return this.http.get<Response>(`${this.urlAbilities}/${idRole}`);
  }

  getAbilitiesByUser(idUser: number, idRole: number): Observable<Response> {
    return this.http.get<Response>(`${this.urlAbilities}/${idUser}/${idRole}`);
  }
}
