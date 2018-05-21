import { AuthService } from './../authentication/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.authState$.map(user => {
      if (user) return true;

      const returnUrl = state.url;
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: returnUrl }
      });
      return false;
    });
  }
}
