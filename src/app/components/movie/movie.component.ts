import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { WatchlistService } from '../../http/watchlist.service';
import { showType } from '../../types/trending.type';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  @Input() movies!: showType;
  @Input() type!: string;

  @Output() watchlistUpdated = new EventEmitter<void>();

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit() {}

  addToWatchlist(id: number) {
    this.watchlistService.addToWatchlist(id);
    this.watchlistUpdated.emit();
  }

  removeFromWatchlist(id: number) {
    console.log('remove', id);
    this.watchlistService.removeFromWatchlist(id);
    this.watchlistUpdated.emit();
  }
}
