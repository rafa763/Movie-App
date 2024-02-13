import { Component, Input } from '@angular/core';

import { showType } from '../../types/trending.type';

@Component({
  selector: 'app-watchlist-wrapper',
  templateUrl: './watchlist-wrapper.component.html',
  styleUrl: './watchlist-wrapper.component.css',
})
export class WatchlistWrapperComponent {
  @Input() watchlist: showType[] = [];
}
