import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../http/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrl: './admin-movie.component.css',
})
export class AdminMovieComponent implements OnInit {
  MovieForm!: FormGroup;
  visible = false;
  movie!: any;
  update = false;
  id!: number;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.update = true;
      this.movie = this.getMovie(this.id);
    }

    this.MovieForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      original_title: new FormControl(null, Validators.required),
      overview: new FormControl(null, Validators.required),
      poster_path: new FormControl(null, Validators.required),
      backdrop_path: new FormControl(null, Validators.required),
      first_air_date: new FormControl(null, Validators.required),
      adult: new FormControl(null, Validators.required),
      original_language: new FormControl(null, Validators.required),
      video: new FormControl(null, Validators.required),
      type: new FormControl('Internal', Validators.required),
      vote_average: new FormControl(null, Validators.required),
      vote_count: new FormControl(null, Validators.required),
      popularity: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.update) {
      this.updateMovie();
    } else {
      this.addMovie();
    }
  }

  addMovie() {
    this.movieService.addMovie(this.MovieForm.value).subscribe(
      (res) => {
        console.log('res', res);
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 3000);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  updateMovie() {
    this.movieService.updateMovie(this.id, this.MovieForm.value).subscribe(
      (res) => {
        console.log('res', res);
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 3000);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  getMovie(id: number) {
    this.movieService.getMovie(id).subscribe((res) => {
      this.MovieForm.patchValue(res);
      return res;
      console.log('res', res);
    });
  }
}
