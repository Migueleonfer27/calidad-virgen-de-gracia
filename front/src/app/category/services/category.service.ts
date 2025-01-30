import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { Result } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categoryUrl: string = environment.apiUrl;
  private _categoryPath: string = '/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Result> {
    const url = this._categoryUrl+this._categoryPath;
    return this.http.get<Result>(url)
  }
}
