import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserMessagesComponent } from './components/user-messages/user-messages.component';


const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      {
        path: 'userProfile',
        component: UserProfileComponent,

      },
      {
        path: 'userMessages',
        component: UserMessagesComponent
      },
      {
        path: '',
        redirectTo: 'userProfile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
