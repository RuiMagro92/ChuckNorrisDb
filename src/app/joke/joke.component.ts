import {Component, OnInit} from '@angular/core';
import {JokeService} from '../joke.service';
import {RandomJoke} from '../models/randomjoke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  rJoke: RandomJoke;
   gifs = ['https://media.giphy.com/media/BIuuwHRNKs15C/200.gif',
    'https://media.giphy.com/media/w7tU2rQXgRzVK/giphy.gif',
    'https://media2.giphy.com/media/d2jfPv6CUzpopfLa/giphy.gif',
    'https://media.giphy.com/media/xT5LMWvA81jKHj9v44/giphy.gif',
    'https://media.giphy.com/media/3o6Mb395KnQLgZvSY8/giphy.gif'];
  gif = 'https://media.giphy.com/media/BIuuwHRNKs15C/200.gif';
  constructor(public jokeService: JokeService) {
  }

  ngOnInit() {
  }

  getJoke() {
    this.jokeService.getRandomJoke().subscribe(res => {
      this.rJoke = res;
      this.gif = this.gifs[Math.floor(Math.random() * this.gifs.length)];
    });
  }

}
