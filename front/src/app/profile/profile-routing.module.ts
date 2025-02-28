import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AbilitiesGuard } from '../auth/guards/abilities.guard';
import { abilities } from '../utils/abilities';

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
