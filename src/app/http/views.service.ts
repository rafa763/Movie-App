import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../consts/api';

@Injectable({
  providedIn: 'root',
})
export class ViewsService {
  constructor(private http: HttpClient) {}

  addView(movieId: number) {
    console.log('movieId http', movieId);
    return this.http.post(`${API_BASE_URL}/views`, {
      userId: 23,
      movieId,
    });
  }

  getMovieViews(movieId: number) {
    return this.http.get(`${API_BASE_URL}/views/${movieId}`);
  }

  getUserviews() {
    return this.http.get(`${API_BASE_URL}/views`);
  }
}
