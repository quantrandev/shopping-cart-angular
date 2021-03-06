import { Router } from '@angular/router';
import { AuthService } from './../authentication/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authUser$;
  constructor(public auth: AuthService, private router: Router) {
    this.authUser$ = this.auth.authUser$;
  }

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
