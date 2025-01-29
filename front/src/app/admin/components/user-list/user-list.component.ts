import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiResponse, UserList } from '../../interfaces/user.interfaces';
import { AdminService } from '../../services/admin.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

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

  displayedColumns: string[] = ['id', 'first_name', 'gender', 'roles', 'actions'];

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

  editUser(id: number) {
    console.log('ID del usuario:', id);

    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: { id, message: '¿Estás seguro de que deseas editar este usuario?' }
    });

    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        console.log('Datos del usuario:', user);
        this.adminService.updateUser(id, user).subscribe(() => {
          this.dataSource.data = this.dataSource.data.map(u => u.id === id ? { ...u, ...user } : u);
        });
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
          }
        );
      }
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
          this.dataSource.data = this.dataSource.data.filter(user => user.id !== user_id);
        });
      }
    });
  }
}
