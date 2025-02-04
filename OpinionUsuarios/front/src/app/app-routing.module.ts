//Javier
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpinionFormComponent } from './opinion/opinion-form/opinion-form.component';

const routes: Routes = [
  { path: 'opinion', component: OpinionFormComponent },
  { path: '', redirectTo: '/opinion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
