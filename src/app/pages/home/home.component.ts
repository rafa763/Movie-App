import { Component, ViewChild } from '@angular/core';

import { WatchlistWrapperComponent } from '../../components/watchlist-wrapper/watchlist-wrapper.component';
import { showType } from '../../types/trending.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  movies: showType[] = [];
  watchlist: showType[] = [];

  @ViewChild(WatchlistWrapperComponent)
  watchlistWrapper!: WatchlistWrapperComponent;

  updateWatchlist() {
    // console.log('NO updatezzz');
    this.watchlistWrapper.getWatchlist();
  }
}
