import { contactMethods } from './../../models/contact.metod.model';
import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { PostalAddress } from '../../models/postal.address.model';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  contactMethods: contactMethods = {};
  addresses: PostalAddress = {};
  person!: Person;
  user: User = {};
  onSubmit() {
    if (this.user.username && this.user.password) {
      this.authenticationService
        .login(this.user.username, this.user.password)
        .subscribe(
          () => {
            this.router.navigate(['/home']);
          },
          (error) => {
            console.error('Login failed:', error);
          }
        );
    } else {
      console.error('Username or password is undefined');
    }
  }
  onSignUp() {
    this.authenticationService.register(this.person).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
