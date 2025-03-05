import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { TokenService } from '../../../../../../login/front/src/app/auth/services/token.service'


@Component({
  selector: 'shared-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private tokenService: TokenService) { }

  isUserLoggedIn(): boolean {
    return !!this.tokenService.getSessionActive()
  }

  // Jaime Ortega
  ngOnInit(): void {
    const role = this.tokenService.getSelectedRole()
    if (role) {
      localStorage.setItem('rol', JSON.stringify(role))
    }
    const token = this.tokenService.getToken()
    if (token) {
      localStorage.setItem('token', token)
      const decodeToken = this.tokenService.decodeToken()
      if (decodeToken) {

        localStorage.setItem('user_id', decodeToken.uid.toString())
        localStorage.setItem('roles', JSON.stringify(decodeToken.roles))
      } else {
        console.error('El token no se pudo decodificar o no contiene uid')
      }
    } else {
      this.tokenService.clearSession()
      // console.error('No se encontró el token')
    }
  }

  changeRole(): void {
    window.location.href = 'http://localhost:4300/auth/roles'
  }

  logout(): void {
    this.tokenService.clearSession()
    this.tokenService.setSessionActive(false)
    window.location.href = 'http://localhost:4300'
  }
}
