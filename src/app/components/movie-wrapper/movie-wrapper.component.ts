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
  pageSize: number = 20;
  movies: Movie[] = [];
  message!: ErrorType;
  @Output() watchlistUpdated = new EventEmitter<void>();

  constructor(private trendingService: TrendingService) {}

  ngOnInit() {
    this.getTrending();
  }

  // get the pagesize variable from the input field in the html

  getTrending(id?: number, pageSize: number = this.pageSize) {
    console.log('from ts', pageSize);

    this.trendingService.getTrending(id, pageSize).subscribe(
      (res: any) => {
        let fetched: Movie[] = res;
        this.movies = [...fetched];
      },
      (err) => {
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
