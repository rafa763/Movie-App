import { Component, Input, Output, EventEmitter } from '@angular/core';

import { showType } from '../../types/trending.type';

@Component({
  selector: 'app-watchlist-wrapper',
  templateUrl: './watchlist-wrapper.component.html',
  styleUrl: './watchlist-wrapper.component.css',
})
export class WatchlistWrapperComponent {
  @Input() watchlist: showType[] = [];
  @Output() watchlistUpdated = new EventEmitter<void>();

  onWatchlistUpdated() {
    this.watchlistUpdated.emit();
  }
}
