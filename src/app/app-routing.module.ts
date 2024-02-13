import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './components/movie/movie.component';
import { CarouselCardsComponent } from './components/carousel-cards/carousel-cards.component';
import { AuthComponent } from './pages/authenticate/auth.component';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'auth', canActivate: [AuthGuard], component: AuthComponent },
  { path: 'account', canActivate: [AuthGuard], component: AccountComponent },
  { path: 'test', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
