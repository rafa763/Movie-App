import { Component, OnInit } from '@angular/core';

import { TrendingService } from '../../http/trending.service';
import { WatchlistService } from '../../http/watchlist.service';
import { mapMovies } from '../../maps/movies.map';
import { showType } from '../../types/trending.type';
import { errorType } from '../../types/error.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movies: showType[] = [];
  watchlist: showType[] = [];

  constructor(
    private trendingService: TrendingService,
    private watchlistService: WatchlistService
  ) {}

  ngOnInit() {
    this.getTrending();
    this.getWatchlist();
  }

  getWatchlist() {
    this.watchlistService.getWatchlist().subscribe(
      (res: any) => {
        if (res) {
          this.watchlist = mapMovies(res.results);
          // console.log('WL', this.watchlist);
          return;
        }
      },
      (error: errorType) => {
        console.log('error', error.error);
      }
    );
  }

  getTrending(id?: number) {
    this.trendingService.getTrending(id).subscribe(
      (res: any) => {
        if (res) {
          let fetched: showType[] = mapMovies(res.results);
          this.movies = [...this.movies, ...fetched];
          // console.log('MW', this.movies);
          return;
        }

        this.movies = res.results;
        console.log(res);
      },
      (error: errorType) => {
        console.log('error', error.error);
      }
    );
  }

  doFetchMoreMovies(idx: number) {
    this.getTrending(idx);
  }

  updateWatchlist() {
    console.log('updatezzz');
    this.getWatchlist();
  }
}
