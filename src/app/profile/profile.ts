import { Component } from '@angular/core';

Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
interface User {
  name: string;
  email: string;
  age: number;
  location: string;
  bio: string;
}

export class ProfileComponent {
  user: User = {
    name: 'Harry Jake Bahatan',
    email: 'Bharryjake@email.com',
    age: 20,
    location: 'Philippines',
    bio: 'IT Student who is learning about coding'
  };
}

export class Profile {

}
