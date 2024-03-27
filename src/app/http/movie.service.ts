import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../consts/api';
import { Movie } from '../types/movie.type';
// import { showType } from '../types/trending.type';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getTrending(page: number, size: number) {
    console.log('from req', page, size);
    return this.http.get<Movie[]>(
      `${API_BASE_URL}/movies?page=${page}&size=${size}`
    );
  }

  getMovie(id: number) {
    return this.http.get<Movie>(`${API_BASE_URL}/movies/${id}`);
  }

  deleteMovie(id: number) {
    return this.http.delete(`${API_BASE_URL}/movies/${id}`);
  }

  addMovie(movie: Movie) {
    return this.http.post(`${API_BASE_URL}/movies`, movie);
  }

  updateMovie(id: number, movie: Movie) {
    return this.http.put(`${API_BASE_URL}/movies/${id}`, movie);
  }
}
