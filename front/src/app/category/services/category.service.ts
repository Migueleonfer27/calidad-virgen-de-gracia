import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category, Result, ResultInsert } from '../interfaces/category';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

private _categoriesList:Category[]=[]
 public categoriesUrl: string="/categories"
  constructor(private http: HttpClient) { }

  get categoriesList():Category[] {
    return this._categoriesList
  }

  set categoriesList(categoryList:Category[]){
    this._categoriesList=categoryList
  }

  showAll(){
    return this.http.get<Result>(`${environment.apiUrl+this.categoriesUrl}`)
    .pipe(
      map(result => result.data.length > 0 ? result.data: null),
      catchError(() => of(null))
    );
    //return this.http.get<Result>( `${environment.apiUrl+this.categoriesUrl}`)

    }

  deleteCategory(id: number){
    return this.http.delete<Result>(`${environment.apiUrl+this.categoriesUrl}/delete/${id}`)
  }

  editCategory(category: Category){
    return this.http.put<Result>(`${environment.apiUrl+this.categoriesUrl}/update`,category)
  }

  addCategory(category: Category){
    return this.http.post<ResultInsert>(`${environment.apiUrl+this.categoriesUrl}/insert`,category)
  }
}
