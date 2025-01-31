import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../../services/admin.service';
import { ApiResponseRoles } from '../../interfaces/user.interfaces';
import { Role } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-form-role',
  standalone: false,

  templateUrl: './form-role.component.html',
  styleUrl: './form-role.component.css'
})
export class FormRoleComponent {
  roleForm: FormGroup;
  roles: ApiResponseRoles = {} as ApiResponseRoles;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService
  ) {
    this.roleForm = this.fb.group({
      code: ['', Validators.required],
      year: ['', Validators.required],
      position: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.data.id) {
      this.adminService.getRoles().subscribe((roleList) => {
        this.roles = roleList;
        const role = this.roles.data.find((role: Role) => role.id === this.data.id);
        if (role) this.roleForm.patchValue(role);
      });
    }
  }

  save() {
    if (this.roleForm.valid) {
      this.dialogRef.close(this.roleForm.value);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
