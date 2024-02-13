import { Component, Input, Output, EventEmitter } from '@angular/core';

import { showType } from '../../types/trending.type';

@Component({
  selector: 'app-movie-wrapper',
  templateUrl: './movie-wrapper.component.html',
  styleUrl: './movie-wrapper.component.css',
})
export class MovieWrapperComponent {
  @Input() movies: showType[] = [];
  @Output() watchlistUpdated = new EventEmitter<void>();

  onWatchlistUpdated() {
    this.watchlistUpdated.emit();
  }
}
