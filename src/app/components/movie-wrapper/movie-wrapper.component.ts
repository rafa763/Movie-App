import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrendingService } from '../../http/trending.service';

import { showType } from '../../types/trending.type';
import { mapMovies } from '../../maps/movies.map';
import { errorType } from '../../types/error.type';

@Component({
  selector: 'app-movie-wrapper',
  templateUrl: './movie-wrapper.component.html',
  styleUrl: './movie-wrapper.component.css',
})
export class MovieWrapperComponent implements OnInit {
  idx = 1;
  movies: showType[] = [];
  @Output() watchlistUpdated = new EventEmitter<void>();

  constructor(private trendingService: TrendingService) {}

  ngOnInit() {
    this.getTrending();
  }

  getTrending(id?: number) {
    this.trendingService.getTrending(id).subscribe(
      (res: any) => {
        // console.log('xres', res);
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
        // console.log('xres', mapMovies(error));
        console.log('error', error.error);
      }
    );
  }

  onWatchlistUpdated() {
    this.watchlistUpdated.emit();
  }

  fetchMore() {
    this.idx += 1;
    this.getTrending(this.idx);
  }
}
