import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../../http/trending.service';
import { showType } from '../../types/trending.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movies: showType[] = [];
  constructor(private trendingService: TrendingService) {}

  ngOnInit() {
    this.trendingService.getTrending().subscribe({
      next: (response: showType[]) => {
        this.movies = response;
        console.log(this.movies[0]);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
}
