import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-reset-password-dialog',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class resetPasswordComponent {
  resetPasswordForm: FormGroup
  errorMessage: string = ''
  successMessage: string = ''
  isLoading: boolean = false

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialogRef: MatDialogRef<resetPasswordComponent>
  ) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.isLoading = true
      this.errorMessage = ''
      this.successMessage = ''

      this.authService.requestPasswordReset(this.resetPasswordForm.get('email')?.value)
        .subscribe({
          next: (response) => {
            this.successMessage = 'Se ha enviado un correo con la nueva contraseña.'
            this.isLoading = false
            setTimeout(() => this.dialogRef.close(), 3000)
          },
          error: (error) => {
            this.errorMessage = error.error?.message || 'Error al procesar la solicitud'
            this.isLoading = false
          }
        })
    }
  }

  onClose(): void {
    this.dialogRef.close()
  }
}
