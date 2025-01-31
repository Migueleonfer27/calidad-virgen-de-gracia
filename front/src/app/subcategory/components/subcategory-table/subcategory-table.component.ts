import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcategoryService } from '../../services/subcategory.service';
import { switchMap } from 'rxjs';
import { Subcategory, SubcategoryIns } from '../../interfaces/subcategory.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EditDialogComponent } from '../../../category/components/edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditSubcategoryDialogComponent } from '../edit-subcategory-dialog/edit-subcategory-dialog.component';

@Component({
  selector: 'app-subcategory-table',
  standalone: false,

  templateUrl: './subcategory-table.component.html',
  styleUrl: './subcategory-table.component.css'
})
export class SubcategoryTableComponent {
  id?: number
  name?: string
  displayedColumns: string[] = [ 'name','star'];
  dataSource: MatTableDataSource<Subcategory>=new MatTableDataSource<Subcategory>([]);
  constructor(private route: ActivatedRoute, private subcategoryService: SubcategoryService, private dialog: MatDialog, private snackBar:MatSnackBar) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {

   console.log(this.name);
     this.route.params
          .pipe(
            switchMap(params => {
              console.log('Parámetros recibidos:', params);
              this.id = +params['id']; // Convertir a número
              this.name = params['name']; // Guardar nombre
              return this.subcategoryService.getSubcategoriesFromCategory(this.id);
            })
          )
          .subscribe(subcategories => {
            console.log('Subcategorías obtenidas:', subcategories.data);
            this.dataSource=new MatTableDataSource(subcategories.data!);
            this.dataSource.paginator=this.paginator
            this.dataSource.sort=this.sort
          });
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

  addSubcategory(){
     const subcategory:SubcategoryIns={name:"", id_category:this.id!}
        const dialog = this.dialog.open( EditDialogComponent, {
              width: '250px',
              enterAnimationDuration:'400ms',
              exitAnimationDuration:'400ms',
              data:subcategory
            });

            dialog.afterClosed().subscribe(
              (result) => {
                if( result) {
                    this.subcategoryService.addSubcategory(subcategory)
                    .subscribe((resultInsert)=>{
                      this.dataSource.data = [...this.dataSource.data, resultInsert.data];

                      this.snackBar.open(`La categoría ${subcategory.name} ha sido insertada correctamente`,'Cerrar',{
                         duration:2000,
                          panelClass: ['main-snackbar'],
                          verticalPosition: 'top'
                      })
                      console.log(this.snackBar)



                    })
                }
              }
            )
  }

  editSubcategory(subcategory:SubcategoryIns) {
    const dialog = this.dialog.open( EditSubcategoryDialogComponent, {
      width: '250px',
      data: subcategory,
      enterAnimationDuration:'400ms',
      exitAnimationDuration:'400ms'
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if( result) {

            this.subcategoryService.editSubcategory(subcategory).subscribe((result)=>{
                console.log(result)
               if(result.data.id_category!=this.id){
                this.dataSource.data=this.dataSource.data.filter((cat)=>cat.id!=subcategory.id)
               }else{
                this.dataSource.data.map(row =>

                  row.id == result.data.id ?  row=result.data : row
                );
               }

            })
        }
      }
    )
  }
}
