import { Component, Input, OnChanges } from '@angular/core';

import { showType } from '../../types/trending.type';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnChanges {
  @Input() moviesx!: showType;

  movieName: string = 'The Matrix';
  movieYear: number = 1999;
  movieRating: string = '4.6';
  movieDescription: string =
    'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.';

  ngOnChanges() {
    console.log('ddd', this.moviesx);
  }
}
