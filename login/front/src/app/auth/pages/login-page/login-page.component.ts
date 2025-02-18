// Jaime Ortega
import { Component } from '@angular/core'
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    const sessionActive = this.tokenService.getSessionActive()
    if (!sessionActive) {
      this.tokenService.clearSession()
    }
  }
}
