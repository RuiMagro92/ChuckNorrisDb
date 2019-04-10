import {Component, OnInit} from '@angular/core';
import {JokeService} from '../joke.service';
import {Joke} from '../models/joke.model';
import {RandomJoke} from '../models/randomjoke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  rJoke: RandomJoke;

  constructor(public jokeService: JokeService) {
  }

  ngOnInit() {
  }

  getJoke() {
    this.jokeService.getRandomJoke().subscribe(res => {
      this.rJoke = res;
      console.log(this.rJoke);
    });
  }

}
