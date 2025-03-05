//Miguel y Daniel
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../../environments/environment.development';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { WebSocketService } from '../../../webSocket/web-socket.service';
import { Role, User, UserList } from '../../interfaces/user.interfaces';
import { AdminService } from '../../services/admin.service';
import { FormUserDialogComponent } from '../form-user-dialog/form-user-dialog.component';
import { MessageFormDialogComponent } from '../message-form-dialog/message-form-dialog.component';
import { RolesDialogComponent } from '../roles-dialog/roles-dialog.component';
import { PermissionViewService } from '../../../shared/services/permission-view.service';
import { abilities } from '../../../utils/abilities';


@Component({
  selector: 'app-user-list',
  standalone: false,

  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements AfterViewInit {
  dataSource: MatTableDataSource<UserList> = new MatTableDataSource<UserList>(
    []
  );

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  myColor: string = '#A5B8DB';
  hoveredRow: any = null;
  abilities=abilities
  private _uploadUrl: string = environment.uploadUrl;
  senderId: number = Number(localStorage.getItem('user_id'));
  displayedColumns: string[] = [
    '#',
    'photo',
    'dni',
    'first_name',
    'last_name',
    'corporate_email',
    'roles',
    'actions',
  ];


  constructor(
    private adminService: AdminService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private permissionView: PermissionViewService,
    private webSocketService: WebSocketService
  ) {
    this.adminService.getUsers().subscribe(
      (response) => {
        if (response.data) {
          this.dataSource.data = response.data;
        } else {
          console.error('La respuesta no contiene datos válidos:', response);
        }
      },
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  createUser() {
    const dialogRef = this.dialog.open(FormUserDialogComponent, {
      width: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        id: null,
        title: 'Crear usuario',
        button: 'Crear',
        closeBtn: 'Cancelar',
        message: 'Complete el formulario para crear un nuevo usuario.',
      },
    });

    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        this.adminService.postUser(user).subscribe({
          next: (user) => {
            this.dataSource.data = [...this.dataSource.data, user];
            this.refreshUsers();
            this.snackBar.open('Usuario creado correctamente', 'Cerrar', {
              duration: 3000,
            });
          },
          error: (error) => {
            this.snackBar.open(error.error.message, 'Cerrar', {
              duration: 3000,
            });
          },
        });
      }
    });
  }

  showUser(id: number) {
    const dialogRef = this.dialog.open(FormUserDialogComponent, {
      width: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        id,
        title: 'Información del usuario',
        button: 'Info',
        closeBtn: 'Cerrar',
        message: 'Listado completo de la información del usuario.',
      },
    });
  }

  sendMessage(user: User) {
    const dialogRef = this.dialog.open(MessageFormDialogComponent, {
      width: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: { title: 'Enviar mensaje', button: 'Enviar', closeBtn: 'Cerrar', message: `Destinatario: ${user.first_name} ${user.last_name}` }
    });

    dialogRef.afterClosed().subscribe((message) => {
      if (message) {
        const newMessage = {
          subject: message.subject,
          message: message.message,
          userId: user.id,
          senderId: this.senderId
        }
        this.webSocketService.emit('enviar-mensaje', newMessage);
      }
    });
  }

  editUser(id: number) {
    const dialogRef = this.dialog.open(FormUserDialogComponent, {
      width: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        id,
        title: 'Editar usuario',
        button: 'Editar',
        closeBtn: 'Cancelar',
        message: 'En este menú puedes cambiar los datos del usuario.',
      },
    });

    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        this.adminService.updateUser(id, user).subscribe({
          next: () => {
            this.dataSource.data = this.dataSource.data.map((u) =>
              u.id === id ? { ...u, ...user } : u
            );
            this.snackBar.open('Usuario actualizado correctamente', 'Cerrar', {
              duration: 3000,
            });
          },
          error: (error) => {
            this.snackBar.open(error.error.message, 'Cerrar', {
              duration: 3000,
            });
          },
        });
      }
    });
  }

  deleteUser(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        message: '¿Estás seguro de que deseas eliminar este usuario?',
        button: 'Eliminar',
        closeBtn: 'Cancelar',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.adminService.deleteUser(id).subscribe({
          next: () => {
            this.dataSource.data = this.dataSource.data.filter(
              (user) => user.id !== id
            );
            this.snackBar.open('Usuario eliminado correctamente', 'Cerrar', {
              duration: 3000,
            });
          },
          error: (error) => {
            this.snackBar.open(error.error.message, 'Cerrar', {
              duration: 3000,
            });
          },
        });
      }
    });
  }

  addRole(user_id: number) {
    const dialogRef = this.dialog.open(RolesDialogComponent, {
      width: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        title: 'Añadir roles',
        button: 'Añadir',
        closeBtn: 'Cancelar',
        message: 'En este menú puedes añadir roles a tus usuarios.',
      },
    });

    dialogRef.afterClosed().subscribe((selectedRoles: Role[]) => {
      if (selectedRoles?.length) {
        const roles_ids = selectedRoles.map((role) => role.id);

        this.adminService.addRole(user_id, roles_ids).subscribe(
          (response) => {
            const newRoles = response.data.map((roleData) => {
              const role = selectedRoles.find(
                (role) => role.id === roleData.role_id
              );
              return {
                id: roleData.role_id,
                position: role?.position || 'Desconocido',
              };
            });

            this.dataSource.data = this.dataSource.data.map((user) =>
              user.id === user_id
                ? { ...user, Roles: [...user.Roles, ...newRoles] }
                : user
            );

            this.snackBar.open('Roles añadidos correctamente', 'Cerrar', {
              duration: 3000,
            });
          },
          (error) => {
            this.snackBar.open(error.error.message, 'Cerrar', {
              duration: 3000,
            });
          }
        );
      } else {
        this.snackBar.open('No se seleccionaron roles', 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }
  removeAssignedRole(user_id: number, role_id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        message: '¿Estás seguro de que deseas desasignar este rol?',
        button: 'Remover',
        closeBtn: 'Cancelar',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.adminService.removeAssignedRole(user_id, role_id).subscribe({
          next: () => {
            this.dataSource.data = this.dataSource.data.map((user) => {
              if (user.id === user_id)
                return {
                  ...user,
                  Roles: user.Roles.filter((role) => role.id !== role_id),
                };
              return user;
            });
            this.snackBar.open('Rol desasignado correctamente', 'Cerrar', {
              duration: 3000,
            });
          },
          error: (error) => {
            this.snackBar.open(error.error.message, 'Cerrar', {
              duration: 3000,
            });
          },
        });
      }
    });
  }

  refreshUsers() {
    this.adminService.getUsers().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }

  onFileInputCsv(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.adminService.postCsv(file).subscribe({
        next: () => {
          this.refreshUsers();
          this.snackBar.open('Archivo CSV cargado correctamente', 'Cerrar', {
            duration: 3000,
          });
        },
        error: (error) => {
          this.snackBar.open(error.error.message, 'Cerrar', { duration: 3000 });
        },
      });
    }
  }

  getprofilePicUrl(user: UserList): string {
    return user.profile_picture
      ? `${this._uploadUrl}${user.profile_picture}`
      : 'img-user.png';
  }

  canViewElement(abilitiesKeys: string[]): boolean {
    return this.permissionView.canAccess(abilitiesKeys);
  }
}
