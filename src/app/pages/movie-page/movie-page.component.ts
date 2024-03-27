import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../http/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieX } from '../../types/movie.type';
import { VotesService } from '../../http/votes.service';
import { AuthenticateService } from '../../http/authenticate.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css',
})
export class MoviePageComponent implements OnInit {
  movie!: MovieX;
  showVoteAlert = false;
  checkVote = false;
  admin = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private votesService: VotesService,
    private authenticateService: AuthenticateService
  ) {}

  ngOnInit(): void {
    // get the id from the route
    const id = this.route.snapshot.params['id'];
    this.movieService.getMovie(id).subscribe(
      (res: any) => {
        this.movie = res;
        // console.log('movie', res);
      },
      (err) => {
        console.log('err', err.message);
      }
    );

    this.votesService.isVoted(id).subscribe((res) => {
      console.log('is voted', res);
      if (res) {
        this.checkVote = true;
      }
    });

    this.authenticateService.authenticate().subscribe(
      (res: any) => {
        console.log('res', res);
        if (res.role === 'ADMIN') {
          this.admin = true;
        }
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  voteAsUnappropriate(movieId: number, type: string) {
    type == 'External' ? (movieId += 90000000000) : movieId;
    this.votesService.addVote(movieId).subscribe((res) => {
      console.log('res', res);
      this.showVoteAlert = true;
      this.checkVote = true;
      setTimeout(() => {
        this.showVoteAlert = false;
      }, 3000);
    });
  }

  editMovie(id: number) {
    window.location.href = `/admin/movie/${id}`;
  }

  deleteMovie(id: number) {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.movieService.deleteMovie(id).subscribe((res) => {
        console.log('res', res);
        window.location.href = '/';
      });
    } else {
      console.log('not deleted');
    }
  }
}
