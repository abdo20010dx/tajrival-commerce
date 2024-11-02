// auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userInfo = this.cookieService.get('userInfo');
    // console.log(route.routeConfig?.path);

    // const isLoginPage = route.routeConfig?.path === 'authentication';
    const isLoginPage = true;
    if (userInfo) {
      // User is logged in
      if (isLoginPage) {
        // Redirect logged-in user away from login page
        this.router.navigate(['/devices']); // Redirect to home or any other route
        return false;
      }
      return true; // Allow access to other routes
    } else {
      // User is not logged in
      if (!isLoginPage) {
        // Redirect not-logged-in user to login page
        this.router.navigate(['/authentication/login']); // Redirect to login page
        return false;
      }
      return true; // Allow access to login page
    }
  }
}
