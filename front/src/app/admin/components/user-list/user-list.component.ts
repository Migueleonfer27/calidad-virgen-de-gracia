import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiResponse, UserList } from '../../interfaces/user.interfaces';
import { AdminService } from '../../services/admin.service';

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

  constructor(private adminService: AdminService) {
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

  }

  deleteUser(id: number) {
    this.adminService.deleteUser(id).subscribe(
      (response) => {
        if (response.data) {
          this.dataSource.data = this.dataSource.data.filter(user => user.id !== id);
        } else {
          console.log(response);
        }
      }
    );
  }
}
