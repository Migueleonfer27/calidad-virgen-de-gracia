import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiResponse, Role, UserList } from '../../interfaces/user.interfaces';
import { AdminService } from '../../services/admin.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormUserDialogComponent } from '../form-user-dialog/form-user-dialog.component';

@Component({
  selector: 'app-user-list',
  standalone: false,

  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements AfterViewInit {
  dataSource: MatTableDataSource<UserList> = new MatTableDataSource<UserList>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['#', 'photo', 'dni', 'first_name', 'gender', 'corporate_email', 'roles', 'actions'];

  constructor(private adminService: AdminService, public dialog: MatDialog) {
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
      data: { id: null, title: 'Crear usuario', button: 'Crear', message: 'Complete el formulario para crear un nuevo usuario.' }
    });

    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        this.adminService.postUser(user).subscribe((user) => {
          this.dataSource.data = [...this.dataSource.data, user];
          this.refreshUsers();
        });
      }
    });
  }

  editUser(id: number) {
    const dialogRef = this.dialog.open(FormUserDialogComponent, {
      width: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: { id, title: 'Editar usuario', button: 'Editar', message: '¿Estás seguro de que deseas editar este usuario?' }
    });

    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        this.adminService.updateUser(id, user).subscribe(() => {
          this.dataSource.data = this.dataSource.data.map(u => u.id === id ? { ...u, ...user } : u);
        });

        if (user.roles) this.addRole(id, user.roles);
      }
    });
  }

  deleteUser(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: { message: '¿Estás seguro de que deseas eliminar este usuario?' }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.adminService.deleteUser(id).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(user => user.id !== id);
        });
      }
    });
  }

  addRole(user_id: number, role_id: number) {
    this.adminService.addRole(user_id, role_id).subscribe((newRole: Role) => {
      this.adminService.getRoles().subscribe((rolesResponse) => {
        const roleObj = rolesResponse.data.find((r: Role) => r.id === role_id);

        if (roleObj) {
          this.dataSource.data = this.dataSource.data.map(user => {
            if (user.id === user_id) return { ...user, Roles: [...user.Roles, roleObj] };
            return user;
          });
        }
      });
    });
  }

  removeAssignedRole(user_id: number, role_id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: { message: '¿Estás seguro de que deseas desasignar este rol?' }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.adminService.removeAssignedRole(user_id, role_id).subscribe(() => {
          this.dataSource.data = this.dataSource.data.map(user => {
          if (user.id === user_id) return { ...user, Roles: user.Roles.filter(role => role.id !== role_id) };
            return user;
          });
        });
      }
    });
  }

  refreshUsers() {
    this.adminService.getUsers().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }
}

