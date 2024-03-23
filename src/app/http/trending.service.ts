import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../consts/api';
import { Movie } from '../types/movie.type';
// import { showType } from '../types/trending.type';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private http: HttpClient) {}

  getTrending(page: number = 1, size: number = 20) {
    console.log(size);
    return this.http.get<Movie[]>(
      `${API_BASE_URL}/movies?page=${page}&size=${size}`
    );
  }
}
