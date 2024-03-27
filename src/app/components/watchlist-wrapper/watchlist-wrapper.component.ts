// import { Component, Output, EventEmitter, OnInit } from '@angular/core';

// import { WatchlistService } from '../../http/watchlist.service';
// import { Movie } from '../../types/movie.type';
// // import { WatchlistResponseType } from '../../types/watchlist.type';
// // import { ErrorType } from '../../types/error.type';

// @Component({
//   selector: 'app-watchlist-wrapper',
//   templateUrl: './watchlist-wrapper.component.html',
//   styleUrl: './watchlist-wrapper.component.css',
// })
// export class WatchlistWrapperComponent implements OnInit {
//   watchlist: Movie[] = [];
//   message!: string;
//   @Output() watchlistUpdated = new EventEmitter<void>();

//   constructor(private watchlistService: WatchlistService) {}

//   ngOnInit() {
//     // this.getWatchlist();
//   }

//   onWatchlistUpdated() {
//     this.watchlistUpdated.emit();
//   }

//   // getWatchlist() {
//   //   this.watchlistService.getWatchlist().subscribe(
//   //     (res: WatchlistResponseType) => {
//   //       this.watchlist = res.results;
//   //     },
//   //     (err) => {
//   //       if (err.error) {
//   //         this.message = err.message;
//   //       }
//   //     }
//   //   );
//   // }
// }
