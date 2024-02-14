import { showType } from '../types/trending.type';

export function mapMovies(watchlist: any): showType[] {
  return watchlist.map((movie: any) => {
    return {
      id: movie.id,
      name: movie.title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      airDate: new Date(movie.release_date).getFullYear(),
      voteAverage: parseFloat(movie.vote_average.toFixed(1)),
      // success: movie.error ? false : true,
      // status_code: movie.error ? movie.error.status_code : undefined,
      // status_message: movie.error ? movie.error.status_message : undefined,
    };

    // console.log('mappedMovie', mappedMovie);
    // return mappedMovie;
  });
}
