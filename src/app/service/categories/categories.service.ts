import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategories } from 'src/app/model/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  urlApi_categories = "http://localhost:3000/categories";
  constructor(private httpclient:HttpClient) { }

  get_All_Categories ():Observable<Icategories[]>{
    return this.httpclient.get<Icategories[]>(this.urlApi_categories)
  }

}
