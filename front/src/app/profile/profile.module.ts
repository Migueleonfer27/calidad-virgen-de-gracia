import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { UploadProfilePicComponent } from './components/upload-profile-pic/upload-profile-pic.component';
import { PhoneFormatPipe } from '../pipes/phone-format.pipe';



@NgModule({
  declarations: [
    UserPageComponent,
    UserProfileComponent,
    UploadProfilePicComponent,
    PhoneFormatPipe
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
