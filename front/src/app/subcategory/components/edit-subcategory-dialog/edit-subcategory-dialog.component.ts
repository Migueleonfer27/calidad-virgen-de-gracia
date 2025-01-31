import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  Subcategory, SubcategoryIns } from '../../interfaces/subcategory.interface';
import { CategoryService } from '../../../category/services/category.service';
import {Category} from '../../../category/interfaces/category.interface'
@Component({
  selector: 'app-edit-subcategory-dialog',
  standalone: false,

  templateUrl: './edit-subcategory-dialog.component.html',
  styleUrl: './edit-subcategory-dialog.component.css'
})
export class EditSubcategoryDialogComponent {
  catselected?:number
  categories:Category[]=[]
 constructor(private categoriesService: CategoryService, private dialogRef: MatDialogRef<EditSubcategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public subcategory: SubcategoryIns){

    }

ngOnInit(): void {
  this.categoriesService.showAll().subscribe((result) => {
       console.log(result)
       if(result!=null){
        this.categories=result
       }

        console.log(this.categories)

       })
}
validate(): boolean {
  return this.subcategory.name.length>0
}
init() {
if(this.validate()){
  this.subcategory.id_category=this.catselected!

  this.dialogRef.close(true);
  console.log({"cat modificada:":this.subcategory})
}

}

close() {
this.dialogRef.close();
}
}
