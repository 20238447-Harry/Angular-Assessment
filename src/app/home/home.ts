import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  title: string = 'Angular Project';
  version: number = 1;
  isLoggedIn: boolean = true;
}
