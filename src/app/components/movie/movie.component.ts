import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WatchlistService } from '../../http/watchlist.service';
import { Movie } from '../../types/movie.type';
import { Router } from '@angular/router';
import { ViewsService } from '../../http/views.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input() movies!: any;

  constructor(private router: Router, private viewsService: ViewsService) {}

  openFull(id: number) {
    console.log('open', id);
    this.router.navigate(['/movie', id]);

    this.viewsService.addView(id).subscribe((res) => {
      console.log('h movie id' + id);
    });
  }
}
