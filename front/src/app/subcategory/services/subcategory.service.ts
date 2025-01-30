import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { Result } from '../interfaces/subcategory.interface';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private _subcategoryUrl: string = environment.apiUrl;
  private _subcategoryPath: string = '/subcategories';

  constructor(private http: HttpClient) { }

  getSubcategoriesFromCategory(id: number): Observable<Result> {
    const url = `${this._subcategoryUrl}${this._subcategoryPath}/getByCategoryId/${id}`;
    return this.http.get<Result>(url)
  }

}
