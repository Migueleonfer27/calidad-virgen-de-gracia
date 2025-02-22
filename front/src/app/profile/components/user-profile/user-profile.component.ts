import { Component, OnInit } from '@angular/core';
import { User } from '../../../admin/interfaces/user.interfaces';
import { AdminService } from '../../../admin/services/admin.service';

@Component({
  selector: 'user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  usuario: User = {} as User;
  idUsuario: number | null = Number(localStorage.getItem('user_id'));

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    if (this.idUsuario) {
      this.adminService.getUserForProfile(this.idUsuario)
        .subscribe((response) => {
          this.usuario = response.data;
          console.log(this.usuario)
      });

    } else {
      console.error("ID de usuario no válido");
    }
  }

  get profilePicUrl() {
    return this.usuario?.profile_picture
      ? `http://localhost:9090/uploads/profile-pictures/${this.usuario.profile_picture}`
      : 'img-user.png';
  }
}
