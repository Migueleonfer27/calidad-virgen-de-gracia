import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../admin/interfaces/user.interfaces';
import { AdminService } from '../../../admin/services/admin.service';
import { environment } from '../../../../environments/environment.development';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UploadProfilePicComponent } from '../upload-profile-pic/upload-profile-pic.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  private _bottomSheet = inject(MatBottomSheet);

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.idUsuario) {
      this.adminService.getUserForProfile(this.idUsuario)
        .subscribe((response) => {
          this.usuario = response.data;
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

  openBottomSheet(): void {
    const bottomSheetRef = this._bottomSheet.open(UploadProfilePicComponent);

    bottomSheetRef.afterDismissed().subscribe((file: File) => {
      if (file) {
        this.uploadProfilePicture(file);
      }
    });
  }

  uploadProfilePicture(file: File) {
    const formData = new FormData();
    formData.append('img', file);

    this.adminService.uploadUserProfilePicture(this.idUsuario!, formData).subscribe(
      (response) => {
        this.usuario.profile_picture = response.data.profile_picture;
        this.snackBar.open('Imagen modificada correctamente.', 'Cerrar', { duration: 3000 });
      },
      (error) => {
        this.snackBar.open('Error intentando subir la imagen.', 'Cerrar', { duration: 3000 });
      }
    );
  }
}
