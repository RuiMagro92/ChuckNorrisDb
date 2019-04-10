import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {RandomJoke} from './models/randomjoke.model';
import {HttpClient} from '@angular/common/http';
import {JokeCategory} from './models/jokeCategory.model';

@Injectable({
  providedIn: 'root'
})
export class JokeCategoryService {
  API_URL = 'https://api.icndb.com';
  constructor(public http: HttpClient ) {}

  getJokesFromCategory(category: string): Observable<JokeCategory> {
      return this.http.get<JokeCategory>(this.API_URL + '/jokes/?limitTo=[' + category + ']');
  }

}
