import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { WatchlistResponseType } from '../types/watchlist.type';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private accountId = localStorage.getItem('id');
  public watchlistUpdated = new Subject<void>();

  constructor(private http: HttpClient) {}

  // getWatchlist() {
  //   return this.http.get<WatchlistResponseType>(
  //     `https://api.themoviedb.org/3/account/2323211111111/watchlist/movies`,
  //     {
  //       headers: {
  //         accept: 'application/json',
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //       },
  //     }
  //   );
  // }

  addToWatchlist(id: number) {
    return this.http.post(
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
    );
  }

  removeFromWatchlist(id: number) {
    return this.http.post(
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
    );
  }
}
