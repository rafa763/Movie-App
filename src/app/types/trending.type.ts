import { ErrorType } from './error.type';
import { Movie } from './movie.type';

// export interface showType extends ErrorType {
//   id: number;
//   name: string;
//   overview: string;
//   airDate: string;
//   voteAverage: number;
//   posterPath: string;
// }

// _____________________________________________________________________________

export interface TrendingResponseType {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
  error?: ErrorType;
}
