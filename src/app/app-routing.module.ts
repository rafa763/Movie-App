import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthComponent } from './pages/authenticate/auth.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { ViewsComponent } from './pages/views/views.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'auth', component: AuthComponent },
  {
    path: 'movie/:id',
    component: MoviePageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'views', component: ViewsComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: 'movie',
        component: AdminMovieComponent,
      },
      {
        path: 'movie/:id',
        component: AdminMovieComponent,
      },
    ],
  },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin/admin.component').then((m) => m.AdminComponent),
  // },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
