import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatStepperModule } from '@angular/material/stepper'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatRadioModule } from '@angular/material/radio'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'

import { SurveyRoutingModule } from './survey-routing.module'
import { SurveyFormComponent } from './components/survey-form/survey-form.component'
import { SurveyStatisticsComponent } from './components/survey-statistics/survey-statistics.component'
import { SurveyFormPageComponent } from './pages/survey-form-page/survey-form-page.component'
import { SurveyStatisticsPageComponent } from './pages/survey-statistics-page/survey-statistics-page.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    SurveyFormComponent,
    SurveyStatisticsComponent,
    SurveyFormPageComponent,
    SurveyStatisticsPageComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    SurveyFormComponent
  ]
})
export class SurveyModule { }
