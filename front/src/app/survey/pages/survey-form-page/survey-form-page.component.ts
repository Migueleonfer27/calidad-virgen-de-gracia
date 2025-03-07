import { Component, OnInit } from '@angular/core';
import { Question, SurveyResponse } from '../../interfaces/survey.interface';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'survey-form-page',
  standalone: false,
  templateUrl: './survey-form-page.component.html',
  styleUrl: './survey-form-page.component.css'
})
export class SurveyFormPageComponent {
  surveyId: number = 1
  questions: Question[] = []
  responses: SurveyResponse[] = []

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.surveyService.getAllQuestions().subscribe((questions: Question[]) => {
      this.questions = questions
    })
  }
}
