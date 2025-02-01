
import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { CategoryService } from '../../services/category.service';
import { Category, ResultInsert } from '../../interfaces/category';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';





@Component({
  selector: 'app-categories-table',
  standalone: false,

  templateUrl: './categories-table.component.html',
  styleUrl: './categories-table.component.css',

})
export class CategoriesComponent implements AfterViewInit{

  displayedColumns: string[] = [ 'name','star'];
  myColor:string = '#A5B8DB'
  dataSource: MatTableDataSource<Category>=new MatTableDataSource<Category>([])
  hoveredRow: any = null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private categoriesService: CategoryService, private dialog: MatDialog, private snackBar:MatSnackBar) {

  }

  ngOnInit() {
    this.categoriesService.showAll().subscribe((result) => {
      console.log(result)

        this.dataSource=new MatTableDataSource(result!);
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort

      })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(category:Category){
    const dialog = this.dialog.open( EditDialogComponent, {
      width: '250px',
      data: category,
      enterAnimationDuration:'400ms',
      exitAnimationDuration:'400ms'
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if( result) {
            this.categoriesService.editCategory(category).subscribe((result)=>{

                 this.dataSource.data.map(row =>
                  row.id == category.id ?  row=category : row
                );
                /*for (let index = 0; index < this.dataSource.data.length; index++) {
                    this.dataSource.data[index]=category

                }*/

            })
        }
      }
    )
  }

  delet(category:Category){

    this.categoriesService.deleteCategory(category.id!).subscribe((result) => {

      this.dataSource.data=this.dataSource.data.filter((cat)=>cat.id!=category.id)

        this.snackBar.open(`La categoría ${category.name} ha sido borrada correctamente`, 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['main-snackbar']
        });


      })
  }

  add(){
    const category:Category={name:""}
    const dialog = this.dialog.open( EditDialogComponent, {
          width: '250px',
          enterAnimationDuration:'400ms',
          exitAnimationDuration:'400ms',
          data:category
        });

        dialog.afterClosed().subscribe(
          (result) => {
            if( result) {
                this.categoriesService.addCategory(category)
                .subscribe((resultInsert)=>{
                  this.dataSource.data = [...this.dataSource.data, resultInsert.data];

                  this.snackBar.open(`La categoría ${category.name} ha sido insertada correctamente`,'Cerrar',{
                     duration:3000,
                     horizontalPosition: 'center',
                      panelClass: 'main-snackbar',
                      verticalPosition: 'bottom'
                  })
                  console.log(this.snackBar)



                })
            }
          }
        )
  }


}
