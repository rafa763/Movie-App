import { Component, Input, Output, EventEmitter } from '@angular/core';

import { showType } from '../../types/trending.type';

@Component({
  selector: 'app-movie-wrapper',
  templateUrl: './movie-wrapper.component.html',
  styleUrl: './movie-wrapper.component.css',
})
export class MovieWrapperComponent {
  idx = 1;

  @Input() movies: showType[] = [];
  @Output() watchlistUpdated = new EventEmitter<void>();
  @Output() fetchMoreMovies = new EventEmitter<number>();

  onWatchlistUpdated() {
    this.watchlistUpdated.emit();
  }

  fetchMore() {
    this.idx += 1;
    this.fetchMoreMovies.emit(this.idx);
  }
}
