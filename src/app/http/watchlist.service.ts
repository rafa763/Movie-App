import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private accountId = localStorage.getItem('id');

  constructor(private http: HttpClient) {}

  getWatchlist() {
    return this.http.get(
      `https://api.themoviedb.org/3/account/${this.accountId}/watchlist/movies`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
  }

  addToWatchlist(id: number) {
    return this.http
      .post(
        `https://api.themoviedb.org/3/account/${this.accountId}/watchlist`,
        {
          media_type: 'movie',
          media_id: id,
          watchlist: true,
        },
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .subscribe();
  }

  removeFromWatchlist(id: number) {
    return this.http
      .post(
        `https://api.themoviedb.org/3/account/${this.accountId}/watchlist`,
        {
          media_type: 'movie',
          media_id: id,
          watchlist: false,
        },
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .subscribe();
  }
}
