import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RandomJoke} from './models/randomjoke.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JokeService {
API_URL = 'https://api.icndb.com';
  constructor(public http: HttpClient) { }

  getRandomJoke(): Observable<RandomJoke> {
    return this.http.get<RandomJoke>(this.API_URL + '/jokes/random/?escape=javascript');
  }

  getCustomJoke(firstname: string, lastname: string) {
    return this.http.get<RandomJoke>(this.API_URL + '/jokes/random?firstName=' + firstname + '&lastName=' + lastname);
  }


}
