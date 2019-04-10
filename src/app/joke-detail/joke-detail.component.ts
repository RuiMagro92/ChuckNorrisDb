import { Component, OnInit } from '@angular/core';
import {RandomJoke} from '../models/randomjoke.model';
import {ActivatedRoute} from '@angular/router';
import {JokeCategoryService} from '../joke-category.service';
import {JokeCategory} from '../models/jokeCategory.model';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {

  jokes: JokeCategory;

  constructor(private jcs: JokeCategoryService, public ar: ActivatedRoute) { }


  ngOnInit() {
    const categoryName = this.ar.snapshot.paramMap.get('id');
    this.getJokesFromCategory(categoryName);
  }

  getJokesFromCategory(categoryName: string) {
    this.jcs.getJokesFromCategory(categoryName).subscribe(res => {
      this.jokes = res;
    });
  }
}
