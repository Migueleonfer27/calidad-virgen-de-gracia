import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from '../../interfaces/category';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-add-category',
  standalone: false,

  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  constructor(private categoryService: CategoryService,private dialog: MatDialog, private snackBar:MatSnackBar) {

  }


}
