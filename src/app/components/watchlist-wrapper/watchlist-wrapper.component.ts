import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { WatchlistService } from '../../http/watchlist.service';
import { showType } from '../../types/trending.type';
import { mapMovies } from '../../maps/movies.map';

@Component({
  selector: 'app-watchlist-wrapper',
  templateUrl: './watchlist-wrapper.component.html',
  styleUrl: './watchlist-wrapper.component.css',
})
export class WatchlistWrapperComponent implements OnInit {
  watchlist: showType[] = [];
  @Output() watchlistUpdated = new EventEmitter<void>();

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit() {
    this.getWatchlist();
  }

  onWatchlistUpdated() {
    this.watchlistUpdated.emit();
  }

  getWatchlist() {
    this.watchlistService.getWatchlist().subscribe((res: any) => {
      if (res.error) {
        console.log('res', res.error);
        // console.log('WL', this.watchlist);
        return;
      }
      this.watchlist = mapMovies(res.results);
    });
  }
}
