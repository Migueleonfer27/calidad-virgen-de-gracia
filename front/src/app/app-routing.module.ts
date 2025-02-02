import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { CategoryDetailsComponent } from './home/pages/category-details/category-details.component';
import { AdminPageComponent } from './admin/pages/admin-page/admin-page.component';
import { CategoriesComponent } from './category/components/categoriesTable/categories-table.component';
import { UserListComponent } from './admin/components/user-list/user-list.component';

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
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'encuesta',
    component: HomePageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
