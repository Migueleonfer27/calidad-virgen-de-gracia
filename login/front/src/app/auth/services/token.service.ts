// Jaime Ortega
import { Injectable } from '@angular/core'
import { JwtPayload, jwtDecode } from 'jwt-decode'
import { Role } from '../interfaces/role.interface'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private ROLE = 'rol'

  constructor(private cookieService: CookieService) { }

  setToken(token: string): void {
    this.cookieService.set('token', token, { path: '/' })
  }

  getToken(): string | null {
    return this.cookieService.get('token')
  }

  decodeToken(): JwtPayload | null {
    const token = this.getToken()
    if (!token) {
      return null
    }
    try {
      return jwtDecode<JwtPayload>(token) as JwtPayload
    } catch (error) {
      console.error('Error al decodificar el token', error)
      return null
    }
  }

  getUserRoles(): Role[] {
    const decodedToken: any = this.decodeToken()
    const roles = decodedToken?.roles || []
    return roles.map((role: Role) => ({position: role}))
  }

  isTokenExpired(): boolean {
    const decodedToken: any = this.decodeToken()
    if (!decodedToken || !decodedToken.exp) return true

    const currentTime = Math.floor(Date.now() / 1000)
    return decodedToken.exp < currentTime
  }

  removeToken(): void {
    this.cookieService.delete('token', '/')
    this.cookieService.delete(this.ROLE, '/')
  }

  setSelectedRole(role: Role): void {
    this.cookieService.set(this.ROLE, JSON.stringify(role), { path: '/' })
  }

  getSelectedRole(): Role | null {
    const roleString = this.cookieService.get(this.ROLE)
    return roleString ? JSON.parse(roleString) : null
  }
}
