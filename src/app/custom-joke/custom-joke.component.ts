import { Component, OnInit } from '@angular/core';
import {JokeService} from '../joke.service';
import {RandomJoke} from '../models/randomjoke.model';

@Component({
  selector: 'app-custom-joke',
  templateUrl: './custom-joke.component.html',
  styleUrls: ['./custom-joke.component.css']
})
export class CustomJokeComponent implements OnInit {
  firstname: string;
  lastname: string;
  customJoke: RandomJoke;
  constructor(public jokeService: JokeService) { }

  ngOnInit() {
  }

  generateCustomJoke() {
  this.jokeService.getCustomJoke(this.firstname, this.lastname).subscribe(res => {
      this.customJoke = res;
  });
  }

}
