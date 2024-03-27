import { Component, Input, OnInit } from '@angular/core';
import { ViewsService } from '../../http/views.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrl: './views.component.css',
})
export class ViewsComponent implements OnInit {
  @Input() movies!: any;

  constructor(private viewsService: ViewsService) {}

  ngOnInit(): void {
    this.viewsService.getUserviews().subscribe(
      (res) => {
        console.log('views', res);
        this.movies = res;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
