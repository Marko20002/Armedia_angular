import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Person } from '../../models/person.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  person!: Person;
  user: User = {};

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}



  onSignUp() {
    this.authenticationService.register(this.user).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
