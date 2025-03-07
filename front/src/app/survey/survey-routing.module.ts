import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SurveyFormPageComponent } from './pages/survey-form-page/survey-form-page.component'
import { SurveyStatisticsPageComponent } from './pages/survey-statistics-page/survey-statistics-page.component'

const routes: Routes = [
  {
    path: 'form',
    component: SurveyFormPageComponent
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
