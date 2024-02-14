import { ErrorType } from './error.type';
import { Movie } from './movie.type';

export interface WatchlistResponseType {
  results: Movie[];
  error?: ErrorType;
}
