import { Component, OnInit } from '@angular/core';
import {JokeService} from '../joke.service';
import {RandomJoke} from '../models/randomjoke.model';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {

  jokes: RandomJoke;

  constructor(private js: JokeService) { }


  ngOnInit() {
    return this.getExplicit();
    return this.getNerdy();
  }

  getNerdy() {
    this.js.getNerdy().subscribe(jokes => {
      this.jokes = jokes;
    });
  }
  getExplicit() {
    this.js.getExplicit().subscribe(jokes => {
      this.jokes = jokes;
    });
  }
}
