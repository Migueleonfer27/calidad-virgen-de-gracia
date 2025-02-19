// Jaime Ortega
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { AuthRoutingModule } from './auth-routing.module'
import { resetPasswordComponent } from './components/reset-password/reset-password.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { RolesCardComponent } from './components/roles-card/roles-card.component'

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    resetPasswordComponent,
    RolesPageComponent,
    RolesCardComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ]
})
export class AuthModule { }
