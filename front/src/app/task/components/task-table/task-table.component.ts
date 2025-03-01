import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Task, UserAssigned, CacheStore, UserTaskCache, EditedTask, Document } from '../../interfaces/task.interface';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { AdminService } from '../../../admin/services/admin.service';
import { Role } from '../../../admin/interfaces/user.interfaces';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { TaskDocumentDialogComponent } from '../task-document-dialog/task-document-dialog.component';
import { PermissionViewService } from '../../../shared/services/permission-view.service';
import { abilities } from '../../../utils/abilities';

@Component({
  selector: 'app-task-table',
  standalone: false,

  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent {
  displayedColumns: string[] = ['description', 'type', 'end_date', 'accion'];
  dataSource = new MatTableDataSource<Task>([]);
  rolesOption: Role[] = [];
  filteredData: Task[] = [];
  abilities=abilities
  constructor(private permissionView: PermissionViewService,private taskService: TaskService, private router: Router, private adminService: AdminService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.adminService.getRoles().subscribe((res) => {
      this.rolesOption = res.data;
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }


  ngOnInit() {

    this.taskService.getTask()
      .subscribe(response => {

        this.dataSource = new MatTableDataSource(response.data);
        this.filteredData = response.data;
        this.dataSource.paginator = this.paginator

      });
  }

  applyFilter(filterValue: { role: string }) {
    if (!filterValue.role || filterValue.role == "0") {
      this.dataSource.data = this.filteredData;
    } else {
      this.dataSource.data = this.filteredData.filter(
        (task) => task.type == parseInt(filterValue.role)
      );
    }
  }
  userAssigned(users: UserAssigned[], task: Task) {

    this.taskService.saveUsers(users, task)
    this.router.navigate(['/task', 'user-task']);
  }
  documentAssigned(documents:Document[],task: Task) {
   // this.taskService.saveDocuments(documents, task)
    //this.router.navigate(['/task', 'document-task']);
    console.log(documents, task)
    const dialog = this.dialog.open(TaskDocumentDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: { task,documents},
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '400ms'
    });
  }

  getRoleDescription(idRol: number) {

    if (idRol != null) {
      return this.rolesOption.find(r => r.id === idRol)?.position;
    }

    return null

  }

  edit(task: EditedTask) {
    const dialog = this.dialog.open(TaskEditDialogComponent, {
      width: '350px',
      data: { ...task },
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '400ms'
    });

    dialog.afterClosed().subscribe((result) => {
      console.log(result);
      if (!result) return;
      result.end_date = new Date(result.end_date);
      result.end_date.setHours(result.end_date.getHours() + 12);

      this.taskService.editTask(result).subscribe((response) => {
        console.log(response);
        if (response.cod == 1) {
          this.dataSource.data = this.dataSource.data.map((row) =>{
            if (row.id === response.data.id) {
              return {
                ...row,
                description: response.data.description,
                end_date: response.data.end_date
              };
            }
            return row;
        });

          this.snackBar.open(`El evento ${task.description} ha sido modificado correctamente`, 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['main-snackbar']
          });
        } else {
          this.snackBar.open(`Ha ocurrido un error ${task.description} no ha sido editada correctamente`, 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['main-snackbar']
          });
        }

      });
    });
  }

   delet(task:Task) {

        const dialog = this.dialog.open(ConfirmDialogComponent, {
          width: '250px',
          data: { message: `¿Estas seguro de que quieres borrar el evento ${task.description}`, button: 'Eliminar', closeBtn: 'Cancelar' },
          enterAnimationDuration: '400ms',
          exitAnimationDuration: '400ms'
        });

        dialog.afterClosed().subscribe((result) => {
          if (!result) {
            return;
          }

          this.taskService.deleteTask(task).subscribe((result) => {
            if (result.cod == 1) {
              this.dataSource.data = this.dataSource.data.filter((task) => result.data.id != task.id);

              this.snackBar.open(`El evento ${task.description} ha sido borrado correctamente`, 'Cerrar', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                panelClass: ['main-snackbar']
              });
            } else{
              this.snackBar.open(`Ha ocurrido un error, el evento ${task.description} no ha sido borrado correctamente`, 'Cerrar', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                panelClass: ['main-snackbar']
              });
            }
          });
        });
      }

      canViewElement(abilitiesKeys: string[]): boolean {
        return this.permissionView.canAccess(abilitiesKeys);
      }


}


