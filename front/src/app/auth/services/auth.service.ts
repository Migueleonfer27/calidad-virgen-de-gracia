// Jaime Ortega
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment.development'
import { Observable, tap, BehaviorSubject } from 'rxjs'
import { AuthResponse, LoginForm, ResultAbilities, User } from '../interfaces/auth.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}`
  private _currentUser = new BehaviorSubject<User | null>(null)
  public currentUser$ = this._currentUser.asObservable()
  private urlAbilities: string = `${environment.apiUrl}/abilities`;
  constructor(private http: HttpClient) {
    this.checkToken()
  }

  private checkToken() {
    const token = localStorage.getItem('token')
    if (!token) {
      this._currentUser.next(null)
      return
    }
  }

  login(formData: LoginForm): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, formData)
      .pipe(
        tap(resp => {
          if (resp.token) {
            localStorage.setItem('token', resp.token)
            this._currentUser.next(resp.user)
          }
        })
      )
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/logout`, {})
      .pipe(
        tap(() => {
          localStorage.removeItem('token')
          this._currentUser.next(null)
        })
      )
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  }

  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/mail/reset-password`, { email })
      .pipe(
        tap(response => {
          console.log('Password reset requested:', response)
        })
      )
  }

  getAbilitiesByRole(idRole: number) {
    return this.http.get<ResultAbilities>(`${this.urlAbilities}/${idRole}`);
  }
}
