import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private apiUrl = 'http://localhost:9090/api/pdf/fill-pdf';

  constructor(private http: HttpClient) { }

  uploadAndFillPdf(file: File, formData: { [key: string]: string }) {
    const headers = new HttpHeaders({
      'form-data': JSON.stringify(formData),
    });

    return this.http.post(this.apiUrl, file, {
      headers,
      responseType: 'blob'
    }).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
  }
}
