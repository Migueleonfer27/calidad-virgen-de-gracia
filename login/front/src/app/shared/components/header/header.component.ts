import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isUserInLoginPage(): boolean {
    return this.router.url.includes('/auth/login');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
