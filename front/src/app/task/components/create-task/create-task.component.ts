import { Component, inject, ViewChild } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import { DocumentList, RequestInsertByRol, RequestInsertByUser, Task } from '../../interfaces/task.interface';
import { Role, User, UserList } from '../../../admin/interfaces/user.interfaces';
import { AdminService } from '../../../admin/services/admin.service';
import { TaskService } from '../../services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatRadioButton } from '@angular/material/radio';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-create-task',
  standalone: false,

  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  task: Task = { id: 0, description: '', type: 0, end_date: new Date() };
  id_user: number = 0;
  routeSelected: string = '';
  rolesOptions: Role[] = [];
  userOptions: Role[] = [];
  id_subcategory: number = 0;
  documents: DocumentList[] = [];
  documents_selected: FormArray;
  private _formBuilder = inject(FormBuilder);
  @ViewChild('stepper') stepper!: MatStepper;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    endDate: ['', Validators.required],
    selectedOption: ['', Validators.required]
  });

  secondFormGroup = this._formBuilder.group({
    assignment: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    id_subcategory: ['', Validators.required],
    documents: this._formBuilder.array([], Validators.required),
    documents_selected: ['', Validators.required]
  });

  constructor( private snackBar: MatSnackBar, private router: Router, private adminService: AdminService, private taskService: TaskService) {
    this.adminService.getRoles().subscribe((res) => {
      this.rolesOptions = res.data;
    });

    this.adminService.getUsers().subscribe((res) => {
      this.userOptions = res.data.map(user => ({
        id: user.id,
        position: user.first_name + ' ' + user.last_name
      }));
    });


    this.firstFormGroup.valueChanges.subscribe(values => {
      this.task.description = values.firstCtrl!;
      this.task.end_date = new Date(values.endDate!);
      this.routeSelected = values.selectedOption!;
    });


    this.documents_selected = this.thirdFormGroup.get('documents') as FormArray;
  }

  saveTask() {

    if (this.firstFormGroup.invalid) {
      console.log("El formulario no es válido. No se puede guardar.");
      this.firstFormGroup.markAllAsTouched();
      return;
    }
   
    if (this.secondFormGroup.invalid) {
      console.log("El formulario no es válido. No se puede guardar.");
      this. secondFormGroup.markAllAsTouched();
      return;
    }
    const selectedDocumentIds = this.getSelectedDocumentIds();
    console.log( selectedDocumentIds, this.routeSelected);
    if(this.routeSelected=='insert'){
      const task:RequestInsertByUser={"task":{
                  "description":this.task.description,
                  "end_date":this.task.end_date.toString()
                  },
                  "id_user":this.id_user,
                  "id_document":selectedDocumentIds
                };
      this.taskService.saveTaskByUser(task).subscribe(res=> {
          if(res.cod==1){
            this.resetStepper()
            this.snackBar.open(`El evento ${task.task.description} ha sido creado correctamente`, 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              panelClass: ['main-snackbar']
            });

          }else{
            this.snackBar.open(`El evento ${task.task.description} no se ha creado correctamente, debes rellenar todos los campos`, 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              panelClass: ['main-snackbar']
            });
          }


            });
    }else if(this.routeSelected=='insertByRole'){
      const task:RequestInsertByRol={"task":{
        "description":this.task.description,
        "end_date":this.task.end_date.toString(),
        "type":this.task.type
        },

        "id_document":selectedDocumentIds
      };
      this.taskService.saveTaskByRol(task).subscribe(res=> {
        if(res.cod==1){
          this.resetStepper()
          this.snackBar.open(`El evento ${task.task.description} ha sido creado correctamente`, 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['main-snackbar']
          });
        }else{
          this.snackBar.open(`El evento ${task.task.description} no se ha creado correctamente, debes rellenar todos los campos`, 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['main-snackbar']
          });
        }

    })

  }
}

  updateTaskType(newType: number) {

    this.task.type = newType;
    this.secondFormGroup.get('assignment')?.setValue(newType.toString());

  }

  updateTaskUser(idUser: number) {
    this.id_user = idUser;
    this.secondFormGroup.get('assignment')?.setValue(idUser.toString());
  }

  onSubcategorySelected(id: number) {
    this.id_subcategory = id;
    this.loadDocuments(this.id_subcategory);
  }

  loadDocuments(subcategoryId: number) {
    this.taskService.getDocumentBySubcategory(this.id_subcategory).subscribe((res) => {
      if (res.data) {
        this.documents = res.data;
        this.initializeDocuments();
      }
    });
  }
  getSelectedDocumentIds(): number[] {

    const selectedIds = this.documents_selected.controls
      .map((control, index) => control.value ? this.documents[index].id : null)
      .filter(id => id !== null);
    return selectedIds as number[];
  }
  initializeDocuments() {

    while (this.documents_selected.length) {
      this.documents_selected.removeAt(0);
    }

    this.documents.forEach(doc => {
      this.documents_selected.push(this._formBuilder.control(false));
    });
  }

  onDocumentSelectionChange(event: any, index: number) {

    this.documents_selected.at(index).setValue(event.checked);
  }
  resetStepper() {
    this.stepper.reset()
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdFormGroup.reset();

  }
}
