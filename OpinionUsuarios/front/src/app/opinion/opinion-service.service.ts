//Javier
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpinionService {
  private apiUrl = 'http://localhost:3000/api/opinions'; //Modificar más tarde

  constructor(private http: HttpClient) {}

  getOpinions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createOpinion(opinion: { id: number; score: number; comment?: string }): Observable<any> {
    return this.http.post(this.apiUrl, opinion);
  }
}
