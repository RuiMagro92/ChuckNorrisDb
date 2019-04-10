import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from './models/category.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_URL = 'http://api.icndb.com/categories';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category> {
    return this.http.get<Category>(this.API_URL);
  }
}
