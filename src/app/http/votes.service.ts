import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../consts/api';

@Injectable({
  providedIn: 'root',
})
export class VotesService {
  constructor(private http: HttpClient) {}

  addVote(movieId: number) {
    return this.http.post(`${API_BASE_URL}/votes`, {
      movieId,
    });
  }

  getMovieVotes(movieId: number) {
    return this.http.get(`${API_BASE_URL}/votes/${movieId}`);
  }

  isVoted(movieId: number) {
    return this.http.get(`${API_BASE_URL}/votes/check/${movieId}`);
  }
}
