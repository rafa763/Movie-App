import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { showType } from '../types/trending.type';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private http: HttpClient) {}

  getTrending() {
    return this.http
      .get<showType>('https://api.themoviedb.org/3/trending/movie/day', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .pipe(
        map((data: any) => {
          return data.results.map((item: any) => {
            return {
              id: item.id,
              name: item.title,
              overview: item.overview,
              posterPath: item.poster_path,
              airDate: new Date(item.release_date).getFullYear(),
              voteAverage: parseFloat(item.vote_average.toFixed(1)),
            };
          });
        })
      );
  }
}
