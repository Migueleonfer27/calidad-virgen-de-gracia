import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ErrorComponent } from './error/error.component';
import { AbilitiesGuard } from './auth/guards/abilities.guard';
import { abilities } from './utils/abilities';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'category',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule),

  },
  {
    path: 'subcategory',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  },
  {
    path: 'kanban',
    loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canMatch: [AbilitiesGuard],
    data: { abilities: [abilities.uploadPicture,abilities.updatePassword,abilities.updateCategory] }
  },
  {
    path: '**',
    component: ErrorComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
