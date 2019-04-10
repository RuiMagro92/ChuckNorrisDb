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
    'https://media.giphy.com/media/3o6Mb395KnQLgZvSY8/giphy.gif',
    'https://media2.giphy.com/media/l1J3AS8RShMebsmgU/giphy.gif',
    'http://31.media.tumblr.com/3851ee6fa84a114646ddf5aabc01e67e/tumblr_nf3m5kj0jD1tq9q5vo2_400.gif',
    'https://media0.giphy.com/media/Bid9Pf0d4re6c/giphy.gif',
    'https://thumbs.gfycat.com/DeepHappyGnatcatcher-size_restricted.gif',
    'http://i.imgur.com/XacHvqz.gif',
    'http://www.lovethisgif.com/uploaded_images/145266-The-20-Awesomest-Chuck-Norris-Gifs.gif',
    'https://media.giphy.com/media/O5Hhigdv0U8WQ/giphy.gif',
    'http://nonstopchucknorris.com/wp-content/themes/chucknorris/dist/img/gif1.gif',
    'https://i.chzbgr.com/full/7075052544/h67277F38/'];
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
