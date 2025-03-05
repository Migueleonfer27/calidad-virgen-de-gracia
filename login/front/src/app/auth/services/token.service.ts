// src/app/services/token.service.ts
import { Injectable } from '@angular/core'
import { jwtDecode } from 'jwt-decode'
import { Role } from '../interfaces/role.interface'
import { CookieService } from 'ngx-cookie-service'
import { JwtPayload } from '../interfaces/auth.interface'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private TOKEN = 'token'
  private ROLE = 'role'
  private ROLE_ID = 'role_id'

  constructor(private cookieService: CookieService) { }

  clearSession(): void {
    this.removeToken()
    localStorage.clear()
  }

  setToken(token: string): void {
    this.cookieService.set(this.TOKEN, token, { path: '/' })
  }

  getToken(): string | null {
    return this.cookieService.get(this.TOKEN)
  }

  decodeToken(): JwtPayload | null {
    const token = this.getToken()
    if (!token) {
      return null
    }
    try {
      const decodeToken = jwtDecode<JwtPayload>(token)
      console.log('Decoded Token:', decodeToken)
      return decodeToken
    } catch (error) {
      console.error('Error al decodificar el token', error)
      return null
    }
  }

  getUserRoles(): Role[] {
    const decodedToken = this.decodeToken();
    if (!decodedToken?.roles || !Array.isArray(decodedToken.roles)) return [];

    return decodedToken.roles.map((role) => ({
      role_id: role.role_id,
      position: role.position
    }));
  }

  isTokenExpired(): boolean {
    const decodedToken: any = this.decodeToken()
    if (!decodedToken || !decodedToken.exp) return true

    const currentTime = Math.floor(Date.now() / 1000)
    return decodedToken.exp < currentTime
  }

  removeToken(): void {
    this.cookieService.delete(this.TOKEN, '/')
    this.cookieService.delete(this.ROLE, '/')
  }

  setSelectedRole(role: Role): void {
    this.cookieService.set(this.ROLE, JSON.stringify(role), { path: '/' })
  }

  getSelectedRole(): Role | null {
    const roleString = this.cookieService.get(this.ROLE)
    if (roleString) {
        const decodedRole = decodeURIComponent(roleString)
        return JSON.parse(decodedRole) as Role
    }
    return null
  }

  setSessionActive(isActive: boolean): void {
    this.cookieService.set('sessionActive', JSON.stringify(isActive), { path: '/' })
  }

  getSessionActive(): boolean {
    const sessionActiveString = this.cookieService.get('sessionActive')
    return sessionActiveString ? JSON.parse(sessionActiveString) : false
  }
}
