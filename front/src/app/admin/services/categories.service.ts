import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category, Result } from '../interfaces/category';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

private _categoriesList:Category[]=[]
 public serviceUrl: string="http://127.0.0.1:9090/api/"
  constructor(private http: HttpClient) { }

  get categoriesList():Category[] {
    return this._categoriesList
  }

  set categoriesList(categoryList:Category[]){
    this._categoriesList=categoryList
  }

  showAll(){

    this.http.get<Result>( `${this.serviceUrl}categories`)
      .subscribe( resp => {
        this.categoriesList = resp.data
        console.log( {categoriesList: this.categoriesList} )
      } );
    }
}
