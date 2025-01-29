import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, Observable, of } from 'rxjs';

import { Result, Category } from '../interfaces/category.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private _categoryUrl: string = environment.apiUrl;
  private _categoryPath: string = '/categories';

  getCategories(): Observable<Result> {
    const url = this._categoryUrl+this._categoryPath;
    return this.http.get<Result>(url);
  }
}
