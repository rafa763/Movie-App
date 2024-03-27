import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from '../../http/movie.service';

import { Movie } from '../../types/movie.type';
import { TrendingResponseType } from '../../types/trending.type';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-movie-wrapper',
  templateUrl: './movie-wrapper.component.html',
  styleUrl: './movie-wrapper.component.css',
})
export class MovieWrapperComponent implements OnInit {
  page: number = +this.route.snapshot.queryParams['page'] || 1;
  pageSize: number = +this.route.snapshot.queryParams['size'] || 20;
  movies: Movie[] = [];
  message!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.getTrending(this.page, this.pageSize);
  }

  getTrending(page: number, pageSize: number) {
    this.movieService.getTrending(page, pageSize).subscribe(
      (res: Movie[]) => {
        console.log('res ts', res);
        let fetched: Movie[] = res;
        this.movies = [...fetched];
      },
      (err) => {
        if (err.error) {
          this.message = err.message;
        }
      }
    );
  }

  prevPage() {
    this.page -= 1;
    if (this.page >= 1) {
      this.router.navigate(['/'], {
        queryParams: { page: this.page, size: this.pageSize },
      });
      this.getTrending(this.page, this.pageSize);
    }
  }

  nextPage() {
    this.page += 1;
    this.router.navigate(['/'], {
      queryParams: { page: this.page, size: this.pageSize },
    });
    this.getTrending(this.page, this.pageSize);
  }

  updatePageSize(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { size: this.pageSize },
      queryParamsHandling: 'merge', // Merge with existing query parameters
    });
  }
}
