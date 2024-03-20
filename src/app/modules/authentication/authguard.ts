import { AuthenticationService } from './services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot,CanActivate } from '@angular/router';



@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) {}
  
    canActivate(): boolean {
      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
  }