import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrendingResponseType } from '../types/trending.type';
// import { showType } from '../types/trending.type';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private http: HttpClient) {}

  getTrending(page: number = 1) {
    return this.http.get<TrendingResponseType>(
      `https://api.themoviedb.org/3/trending/movie/day?page=${page}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
  }
}
