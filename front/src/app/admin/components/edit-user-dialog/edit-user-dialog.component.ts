import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../services/admin.service';
import { ApiResponse } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: false,

  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.css'
})
export class EditUserDialogComponent {
  userForm: FormGroup;
  user: ApiResponse = {} as ApiResponse;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditUserDialogComponent>,
    private adminService: AdminService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      code: ['', Validators.required],
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      nrp: [''],
      dni: ['', Validators.required],
      abbreviation: [''],
      birth_date: ['', Validators.required],
      gender: [''],
      title: [''],
      address: [''],
      city: [''],
      postal_code: [''],
      province: [''],
      phone_rp: [''],
      specialty: [''],
      body: [''],
      department: [''],
      admission_date: [''],
      leave_date: [''],
      email: ['', [Validators.required, Validators.email]],
      corporate_email: [''],
      password: ['', Validators.required],
      phone: [''],
      profile_picture: ['']
    });
  }

  ngOnInit(): void {
    this.adminService.getUser(this.data.id).subscribe((user) => {
      this.user = user;
      console.log(this.user.data);
      this.userForm.patchValue(this.user.data);
    });
  }

  save() {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
