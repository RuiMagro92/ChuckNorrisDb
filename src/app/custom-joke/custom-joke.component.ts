import { Component, OnInit } from '@angular/core';
import {JokeService} from '../joke.service';

@Component({
  selector: 'app-custom-joke',
  templateUrl: './custom-joke.component.html',
  styleUrls: ['./custom-joke.component.css']
})
export class CustomJokeComponent implements OnInit {
  firstname: string;
  lastname: string;
  constructor(public jokeService: JokeService) { }

  ngOnInit() {
  }

  generateCustomJoke() {

  }

}
