import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class HomeComponent {
  title: string = 'Angular SPA Project';
  version: number = 1;
  isLoggedIn: boolean = false;
}
