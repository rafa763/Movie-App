import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  movieForm!: FormGroup;

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      movieId: new FormControl(null, Validators.required),
    });
  }

  goUpdate() {
    window.location.href = '/admin/movie/' + this.movieForm.value.movieId;
  }
}
