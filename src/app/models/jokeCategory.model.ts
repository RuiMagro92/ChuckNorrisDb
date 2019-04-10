import {Joke} from './joke.model';

export interface JokeCategory {
  type: string;
  value: Joke[];
}
