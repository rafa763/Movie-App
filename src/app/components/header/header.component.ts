import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../http/authenticate.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  admin = false;
  loggedIn = false;
  user = false;

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/') {
          this.onGetHeaderTabs();
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    window.location.href = '/login';
  }

  onGetHeaderTabs() {
    this.authenticateService.authenticate().subscribe(
      (res: any) => {
        console.log('res', res);
        if (res.role === 'ADMIN') {
          this.admin = true;
        } else if (res.role === 'USER' || res.role === 'CHILD') {
          this.user = true;
        }
        this.loggedIn = true;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
