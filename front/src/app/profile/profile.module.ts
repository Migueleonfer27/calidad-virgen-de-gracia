import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { UploadProfilePicComponent } from './components/upload-profile-pic/upload-profile-pic.component';
import { PhoneFormatPipe } from '../pipes/phone-format.pipe';
import { UpdatePassFormDialogComponent } from './components/update-pass-form-dialog/update-pass-form-dialog.component';



@NgModule({
  declarations: [
    UserPageComponent,
    UserProfileComponent,
    UploadProfilePicComponent,
    PhoneFormatPipe,
    UpdatePassFormDialogComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ],
  exports: [
    UserPageComponent,
    UserProfileComponent,
    UploadProfilePicComponent
  ]
})
export class ProfileModule { }
