import {Joke} from './joke.model';

export interface RandomJoke {
  type: string;
  value: Joke;
}
