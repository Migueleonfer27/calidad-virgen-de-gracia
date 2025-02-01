// Jaime Ortega
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { MatDialog } from '@angular/material/dialog'
import { reserPasswordComponent } from '../reset-password/reset-password.component'

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup
  errorMessage: string = ''
  hidePassword: boolean = true

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe({
          next: () => this.router.navigate(['/auth/login']),
          error: (err) => this.errorMessage = err.error.message
        })
    }
  }

  resetPasswordDialog(): void {
    this.dialog.open(reserPasswordComponent, {
      width: '400px',
      disableClose: true
    });
  }
}
