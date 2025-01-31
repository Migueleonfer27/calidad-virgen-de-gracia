import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { CategoryDetailsComponent } from './home/pages/category-details/category-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'category',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  // {
  //   path: 'subcategory',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  // },
  {
    path: 'iniciar-sesion',
    component: HomePageComponent
  },
  {
    path: 'admin',
    component: HomePageComponent
  },
  {
    path: 'encuesta',
    component: HomePageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
