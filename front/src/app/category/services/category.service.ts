import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Category, Result, ResultInsert } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categoryUrl: string = environment.apiUrl;
  private _categoryPath: string = '/categories';
  public categoriesUrl: string="/categories";
  private _categoriesList:Category[]=[]

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Result> {
    const url = this._categoryUrl+this._categoryPath;
    return this.http.get<Result>(url)
  }

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

   editCategory(category:ResultInsert){

      const subCat= this.http.put<ResultInsert>(`${environment.apiUrl+this.categoriesUrl}/update`,category)

        return subCat
    }

  addCategory(category: Category){
    return this.http.post<ResultInsert>(`${environment.apiUrl+this.categoriesUrl}/insert`,category)
  }
}
