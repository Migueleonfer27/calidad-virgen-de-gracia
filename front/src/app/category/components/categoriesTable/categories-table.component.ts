
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CategoryService } from '../../services/category.service';
import { Category, ResultInsert } from '../../interfaces/category';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../../admin/components/confirm-dialog/confirm-dialog.component';
import { SubcategoryService } from '../../../subcategory/services/subcategory.service';
import { Subcategory } from '../../../subcategory/interfaces/subcategory.interface';
import { catchError, map, Observable } from 'rxjs';





@Component({
  selector: 'app-categories-table',
  standalone: false,

  templateUrl: './categories-table.component.html',
  styleUrl: './categories-table.component.css',

})
export class CategoriesComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'star'];
  myColor: string = '#A5B8DB'
  dataSource: MatTableDataSource<Category> = new MatTableDataSource<Category>([])
  hoveredRow: any = null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private categoriesService: CategoryService,private subcategoryService:SubcategoryService, private dialog: MatDialog, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.categoriesService.showAll().subscribe((result) => {

      this.dataSource = new MatTableDataSource(result!);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort

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

  edit(category: Category) {
    const dialog = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: { ...category },
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '400ms'
    });

    dialog.afterClosed().subscribe((result) => {
      if (!result) return;

      this.categoriesService.editCategory(result).subscribe((response) => {
        if (result.data.cod == 1) {
          this.dataSource.data = this.dataSource.data.map(row =>
            row.id === response.data.id ? response.data : row
          );


          this.dataSource.data = [...this.dataSource.data];
        } else {
          this.snackBar.open(`Ha ocurrido un error ${category.name} no ha sido editada correctamente`, 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['main-snackbar']
          });
        }

      });
    });
  }

  delet(category: Category) {
    this.getSubcategories(category.id!).subscribe(subcategories => {
      let msg;

      if (subcategories.length > 0) {
        msg = `Si borras esta categoría se borrarán las siguientes subcategorías:\n\n` +
        subcategories.map(subcategory => `- ${subcategory}`).join('\n');
      } else {
        msg = `¿Estás seguro que quieres borrar la categoría ${category.name}?`;
      }

      const dialog = this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        data: { message: msg, button: 'Eliminar', closeBtn: 'Cancelar' },
        enterAnimationDuration: '400ms',
        exitAnimationDuration: '400ms'
      });

      dialog.afterClosed().subscribe((result) => {
        if (!result) {
          return;
        }

        this.categoriesService.deleteCategory(category.id!).subscribe((result) => {
          if (result.cod == 1) {
            this.dataSource.data = this.dataSource.data.filter((cat) => cat.id != category.id);

            this.snackBar.open(`La categoría ${category.name} ha sido borrada correctamente`, 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              panelClass: ['main-snackbar']
            });
          } else  if(result.cod==2){
            this.snackBar.open(`La categoría ${category.name} no ha sido borrada porque contiene subcategorías con documentos anexos y deben ser eliminados primero`, 'Cerrar', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              panelClass: '.snack'
            })
          }else{
            this.snackBar.open(`Ha ocurrido un error, la categoría ${category.name} no ha sido borrada correctamente`, 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              panelClass: ['main-snackbar']
            });
          }
        });
      });
    });
  }

  getSubcategories(id: number): Observable<string[]> {
    return this.subcategoryService.getSubcategoriesFromCategory(id).pipe(
      map(result => result?.data ? result.data.map(element => element.name) : []),
      catchError(error => {
        console.error('Error obteniendo subcategorías:', error);
        return ([]);
      })
    );
  }

  add() {
    const category: Category = { name: "" }
    const dialog = this.dialog.open(EditDialogComponent, {
      width: '250px',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '400ms',
      data: category
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.categoriesService.addCategory(category)
            .subscribe((resultInsert) => {
              if (resultInsert.cod == 1) {
                this.dataSource.data = [...this.dataSource.data, resultInsert.data];

                this.snackBar.open(`La categoría ${category.name} ha sido insertada correctamente`, 'Cerrar', {
                  duration: 3000,
                  horizontalPosition: 'center',
                  panelClass: 'main-snackbar',
                  verticalPosition: 'bottom'
                })
              } else {
                this.snackBar.open(`Ha ocurrido un error la categoría ${category.name} no ha sido insertada correctamente`, 'Cerrar', {
                  duration: 3000,
                  horizontalPosition: 'center',
                  panelClass: 'main-snackbar',
                  verticalPosition: 'bottom'
                })
              }





            })
        }
      }
    )
  }


}
