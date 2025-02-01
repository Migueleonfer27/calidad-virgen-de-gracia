import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { Result, ResultEditSubcategory, ResultSubcategory, Subcategory, SubcategoryIns } from '../interfaces/subcategory.interface';
import { ResultInsert } from '../../category/interfaces/category';

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

  addSubcategory(subcategory: SubcategoryIns){
  return this.http.post<ResultSubcategory>(`${environment.apiUrl+this._subcategoryPath}/insert`,subcategory)
  }

  editSubcategory(subcategory:SubcategoryIns){

    const subCat= this.http.put<ResultEditSubcategory>(`${environment.apiUrl+this._subcategoryPath}/update`,subcategory)

      return subCat
  }

  deleteSubcategory(id:number){
      return this.http.delete<ResultEditSubcategory>(`${environment.apiUrl+this._subcategoryPath}/delete/${id}`)
  }
}
