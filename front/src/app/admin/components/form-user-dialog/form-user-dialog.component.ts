// Miguel

import { Component, Inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../services/admin.service';
import { ApiResponse, Role } from '../../interfaces/user.interfaces';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: false,

  templateUrl: './form-user-dialog.component.html',
  styleUrl: './form-user-dialog.component.css'
})
export class FormUserDialogComponent {
  userForm: FormGroup;
  user: ApiResponse = {} as ApiResponse;
  roles: Role[] = [];
  hide = signal(true);

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormUserDialogComponent>,
    private adminService: AdminService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      code: ['', Validators.required,],
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      nrp: [''],
      dni: ['', Validators.required],
      abbreviation: [''],
      birth_date: ['', Validators.required],
      gender: ['', Validators.required],
      title: [''],
      address: [''],
      city: ['', Validators.required],
      postal_code: ['', Validators.required],
      province: ['', Validators.required],
      phone_rp: [''],
      specialty: [''],
      body: [''],
      department: [''],
      admission_date: ['', Validators.required],
      leave_date: [''],
      email: ['', [Validators.required, Validators.email]],
      corporate_email: ['', [Validators.required]],
      phone: ['', Validators.required],
      profile_picture: [''],
      roles: [[]]
    });
  }

  ngOnInit(): void {
    this.adminService.getUser(this.data.id).subscribe((user) => {
      this.user = user;
      this.userForm.patchValue(this.user.data);
    });
    this.adminService.getRoles().subscribe((roleList) => {
      this.roles = roleList.data;
    });
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  save() {
    if (this.userForm.valid) {
      let userData = this.userForm.value;
      userData.birth_date = userData.birth_date ? new Date(userData.birth_date).toISOString().split('T')[0] : null;
      userData.admission_date = userData.admission_date ? new Date(userData.admission_date).toISOString().split('T')[0] : null;
      userData.leave_date = userData.leave_date ? new Date(userData.leave_date).toISOString().split('T')[0] : null;
      this.dialogRef.close(userData);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
