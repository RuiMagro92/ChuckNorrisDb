import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke} from './models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
API_URL = 'https://api.icndb.com';
  constructor(public http: HttpClient) { }

  getRandomJoke() {
    return this.http.get<Joke>(this.API_URL + '/random');
  }

  getCustomJoke(firstname: string, lastname: string) {
    return this.http.get<Joke>(this.API_URL + '/random?firstName=' + firstname + '&amp;lastName=' + lastname);
  }

}
