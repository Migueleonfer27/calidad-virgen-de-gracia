import { Component, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Role, UserList } from '../../interfaces/user.interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormRoleComponent } from '../form-role/form-role.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-role-list',
  standalone: false,

  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css'
})
export class RoleListComponent {
  roles: Role[] = [];

  dataSource: MatTableDataSource<Role> = new MatTableDataSource<Role>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['#', 'code', 'year', 'position', 'actions'];

  constructor(private adminService: AdminService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.adminService.getRoles().subscribe((res) => {
      this.dataSource.data = res.data;
    });
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

  createRole() {
    const dialogRef = this.dialog.open(FormRoleComponent, {
      width: '300px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: { id: null, title: 'Crear rol', button: 'Crear', message: 'Complete el formulario para crear un nuevo rol.' }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.adminService.postRole(result).subscribe({
          next: (res) => {
            this.getRoles();
            this.snackBar.open('Rol creado correctamente', 'Cerrar', { duration: 3000 });
          },
          error: (error) => {
            this.snackBar.open(error.error.message, 'Cerrar', { duration: 3000 });
          }
        });
      }
    });
  }

  editRole(id: number) {
    const dialogRef = this.dialog.open(FormRoleComponent, {
      width: '350px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: { id, title: 'Editar rol', button: 'Editar', message: 'Complete el formulario para editar el rol.' }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.adminService.updateRole(id, result).subscribe({
          next: (res) => {
            this.getRoles();
            this.snackBar.open('Rol actualizado correctamente', 'Cerrar', { duration: 3000 });
          },
          error: (error) => {
            this.snackBar.open(error.error.message, 'Cerrar', { duration: 3000 });
          }
        });
      }
    });
  }

  getRoles() {
    this.adminService.getRoles().subscribe((res) => {
      this.dataSource.data = res.data;
    });
  }

  deleteRole(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: { message: '¿Estás seguro de que deseas eliminar este rol?' }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.adminService.deleteRole(id).subscribe({
          next: (res) => {
            this.getRoles();
            this.snackBar.open('Rol eliminado correctamente', 'Cerrar', { duration: 3000 });
          },
          error: (error) => {
            this.snackBar.open(error.error.message, 'Cerrar', { duration: 3000 });
          }
        });
      }
    });
  }
}
