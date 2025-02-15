import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../../admin/interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private apiUrl = `${environment.apiUrl}/download`;

  constructor(private http: HttpClient) { }

  uploadAndFillPdf(url: string, usuario: User, document: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { url, usuario, document });
  }
}
