import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Role } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-roles-dialog',
  standalone: false,
  templateUrl: './roles-dialog.component.html',
  styleUrl: './roles-dialog.component.css',
})
export class RolesDialogComponent {
  roles = new FormControl('');
  roleList: Role[] = [];

  constructor(
    private adminService: AdminService,
    private dialogRef: MatDialogRef<RolesDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      message: string;
      button: string;
      closeBtn: string;
    }
  ) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.adminService.getRoles().subscribe((response) => {
      if (response.data) {
        this.roleList = response.data;
      } else {
        console.error('La respuesta no contiene datos válidos:', response);
      }
    });
  }

  toNumber(value: string): number {
    return Number(value);
  }

  getRolePosition(roleId: number): string {
    const role = this.roleList.find((role) => role.id === roleId);
    return role ? role.position : 'Desconocido';
  }

  onConfirm() {
    const rolesValue = this.roles.value;
    if (rolesValue && Array.isArray(rolesValue) && rolesValue.length > 0) {
      const selectedRoles = this.roleList.filter((role) =>
        rolesValue.includes(role.id)
      );
      this.dialogRef.close(selectedRoles);
    } else {
      this.dialogRef.close(null);
    }
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
