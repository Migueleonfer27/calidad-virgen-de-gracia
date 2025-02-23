import { Component, OnInit } from '@angular/core';
import { User } from '../../../admin/interfaces/user.interfaces';
import { AdminService } from '../../../admin/services/admin.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  usuario: User = {} as User;
  idUsuario: number | null = Number(localStorage.getItem('user_id'));
  private _uploadUrl: string = environment.uploadUrl;

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
      ? `${this._uploadUrl}${this.usuario.profile_picture}`
      : 'img-user.png';
  }
}
