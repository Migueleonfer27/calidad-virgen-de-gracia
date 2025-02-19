// Jaime Ortega
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { MatDialog } from '@angular/material/dialog'
import { resetPasswordComponent } from '../reset-password/reset-password.component'

@Component({
  selector: 'login-form',
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

    this.loginForm.valueChanges.subscribe(() => {
      this.errorMessage = ''
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe({
          next: () => this.router.navigate(['/auth/roles']),
          error: (err) => this.errorMessage = err.error.message
        })
    }
  }

  resetPasswordDialog(): void {
    this.dialog.open(resetPasswordComponent, {
      width: '400px',
      disableClose: true
    });
  }
}
