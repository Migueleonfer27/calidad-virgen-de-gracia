import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Document, EditResult, Result } from '../interfaces/document.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private _documentUrl: String = environment.apiUrl;
  private _documentPath: String = '/documents';

  constructor(private http: HttpClient) {}

  getDocuments(): Observable<Result> {
    const url = `${this._documentUrl}${this._documentPath}`;
    return this.http.get<Result>(url);
  }

  getDocumentsFromSubcategory(id: number): Observable<Result> {
    const url = `${this._documentUrl}${this._documentPath}/getBySubcategoryId/${id}`;
    return this.http.get<Result>(url);
  }

  addDocument(document: Document): Observable<EditResult> {
    const url = `${this._documentUrl}${this._documentPath}`;
    return this.http.post<EditResult>(url, document)
  }

  editDocument(document: Document): Observable<EditResult> {
    const url = `${this._documentUrl}${this._documentPath}/update`;
    return this.http.put<EditResult>(url, {
      id: document.id,
      name: document.name,
      code: document.code,
      url: document.url,
      autofilled: document.autofilled
    });
  }

  deleteDocument(document: Document) {
    const url = `${this._documentUrl}${this._documentPath}/delete/${document.id}`;
    return this.http.delete<EditResult>(url);
  }
}
