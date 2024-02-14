import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrendingService } from '../../http/trending.service';

import { Movie } from '../../types/movie.type';
import { TrendingResponseType } from '../../types/trending.type';
import { ErrorType } from '../../types/error.type';

@Component({
  selector: 'app-movie-wrapper',
  templateUrl: './movie-wrapper.component.html',
  styleUrl: './movie-wrapper.component.css',
})
export class MovieWrapperComponent implements OnInit {
  idx = 1;
  movies: Movie[] = [];
  message!: ErrorType;
  @Output() watchlistUpdated = new EventEmitter<void>();

  constructor(private trendingService: TrendingService) {}

  ngOnInit() {
    this.getTrending();
  }

  getTrending(id?: number) {
    this.trendingService.getTrending(id).subscribe(
      (res: TrendingResponseType) => {
        let fetched: Movie[] = res.results;
        this.movies = [...this.movies, ...fetched];
        // console.log('MW', this.movies);
      },
      (err: TrendingResponseType) => {
        if (err.error) {
          this.message = err.error;
        }
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
