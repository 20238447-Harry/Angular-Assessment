import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProfileComponent } from './profile/profile';
import { Register } from './register/register';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: Register }
];
