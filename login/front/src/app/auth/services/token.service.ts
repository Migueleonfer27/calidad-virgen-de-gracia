// Jaime Ortega
import { Injectable } from '@angular/core'
import { JwtPayload, jwtDecode } from 'jwt-decode'
import { Role } from '../interfaces/role.interface'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private TOKEN = 'token'

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN)
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
    return roles.map((role: Role) => ({ position: role }))
  }

  isTokenExpired(): boolean {
    const decodedToken: any = this.decodeToken()
    if (!decodedToken || !decodedToken.exp) return true

    const currentTime = Math.floor(Date.now() / 1000)
    return decodedToken.exp < currentTime
  }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN, token)
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN)
  }
}
