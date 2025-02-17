import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'category',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
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
    path: '**',
    component: HomePageComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
