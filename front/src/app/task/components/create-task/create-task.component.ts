import { Component, inject } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Task } from '../../interfaces/task.interface';
import { Role, User, UserList } from '../../../admin/interfaces/user.interfaces';
import { AdminService } from '../../../admin/services/admin.service';

@Component({
  selector: 'app-create-task',
  standalone: false,

  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  task:Task={id:0,description:'',type:0,end_date:new Date()}
  selectedOption:String = ''
  rolesOptions:Role[]=[]
  userOptions:Role[]=[]
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    endDate: ['', Validators.required],
    selectedOption: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private adminService: AdminService){
    this.adminService.getRoles().subscribe((res) => {
      this.rolesOptions = res.data;
    });

    // Cargando las opciones de usuarios
    this.adminService.getUsers().subscribe((res) => {
      console.log(res.data);
      this.userOptions = res.data.map(user => ({
        id: user.id,
        position: user.first_name+" "+user.last_name
      }));
    });
  }
}
