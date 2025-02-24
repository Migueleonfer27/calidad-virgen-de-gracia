import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-upload-profile-pic',
  standalone: false,
  templateUrl: './upload-profile-pic.component.html',
  styleUrl: './upload-profile-pic.component.css'
})
export class UploadProfilePicComponent {

  private _bottomSheetRef = inject(MatBottomSheetRef<UploadProfilePicComponent>)
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      this._bottomSheetRef.dismiss(this.selectedFile) 
    }
  }

  close() {
    this._bottomSheetRef.dismiss();
  }

}
