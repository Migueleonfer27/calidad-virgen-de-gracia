// Jaime Ortega
import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Question, SurveyResponse } from '../interfaces/survey.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private _apiUrl: string = environment.apiUrl
  private _surveyPath: string = '/survey'
  private _surveyResponsePath: string = '/survey-response'
  private _questionPath: string = '/question'

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this._apiUrl + this._questionPath).pipe(
      catchError(this.handleError)
    );
  }

  submitSurveyResponse(surveyResponses: SurveyResponse[]): Observable<any> {
    return this.http.post(this._apiUrl + this._surveyResponsePath, surveyResponses).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
