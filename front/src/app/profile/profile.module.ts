import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [
    UserPageComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ],
  exports: [
    UserPageComponent,
    UserProfileComponent
  ]
})
export class ProfileModule { }
