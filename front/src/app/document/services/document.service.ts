import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/document.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private _documentUrl: String = environment.apiUrl;
  private _documentPath: String = '/documents';

  constructor(private http: HttpClient) {}

  getDocuments(): Observable<Result> {
    const url = `${this._documentUrl}${this._documentPath}`;
    return this.http.get<Result>(url)
  }
}
