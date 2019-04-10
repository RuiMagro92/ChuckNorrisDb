import { Component, OnInit } from '@angular/core';
import {JokeService} from '../joke.service';
import {RandomJoke} from '../models/randomjoke.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {

  jokes: RandomJoke[];

  constructor(private js: JokeService, public ar: ActivatedRoute) { }


  ngOnInit() {
    const categoryName = this.ar.snapshot.paramMap.get('id');
    this.getJokesFromCategory(categoryName);
  }

  getJokesFromCategory(categoryName: string) {
    this.js.getJokesFromCategory(categoryName).subscribe(res => {
      this.jokes = res;
    });
  }
}
