import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WatchlistService } from '../../http/watchlist.service';
import { Movie } from '../../types/movie.type';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input() movies!: Movie;
  @Input() type!: string;

  @Output() watchlistUpdated = new EventEmitter<void>();

  constructor(private watchlistService: WatchlistService) {}

  addToWatchlist(id: number) {
    this.watchlistService.addToWatchlist(id).subscribe((_) => {
      console.log('added', id);
      this.watchlistUpdated.emit();
    });
  }

  removeFromWatchlist(id: number) {
    console.log('remove', id);
    this.watchlistService.removeFromWatchlist(id).subscribe((_) => {
      this.watchlistUpdated.emit();
    });
  }
}
