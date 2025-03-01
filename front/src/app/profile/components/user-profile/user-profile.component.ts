import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../admin/interfaces/user.interfaces';
import { AdminService } from '../../../admin/services/admin.service';
import { environment } from '../../../../environments/environment.development';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UploadProfilePicComponent } from '../upload-profile-pic/upload-profile-pic.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePassFormDialogComponent } from '../update-pass-form-dialog/update-pass-form-dialog.component';
import { PermissionViewService } from '../../../shared/services/permission-view.service';
import { abilities } from '../../../utils/abilities';

@Component({
  selector: 'user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  usuario: User = {} as User;
  idUsuario: number = Number(localStorage.getItem('user_id'));
  private _uploadUrl: string = environment.uploadUrl;
  private _bottomSheet = inject(MatBottomSheet);
  abilities=abilities
  constructor(
    private permissionView: PermissionViewService,
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
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

  onChangePassword() {
      const dialog = this.dialog.open(UpdatePassFormDialogComponent, {
        width: '500px',
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
        data: {
          title: 'Cambiar contraseña',
          button: 'Cambiar',
          closeBtn: 'Cancelar',
          message: 'Rellena ambos campos correctamente para cambiar tu contraseña.'
        }
      });

      dialog.afterClosed().subscribe((password) => {
        if (password) {
          this.adminService.updateUserPassword(this.idUsuario, password).subscribe({
            next: (response) => {
              if(response.data == 1) {
                this.snackBar.open('Contraseña cambiada con éxito.', 'Cerrar', { duration: 3000 })
              }
            },
            error: (error) => {
              this.snackBar.open(`No se ha podido cambiar la contraseña.`, 'Cerrar', { duration: 3000 })
            }
          })
        }
      });
    }

    canViewElement(abilitiesKeys: string[]): boolean {
      return this.permissionView.canAccess(abilitiesKeys);
    }
}
