import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {}

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    if (returnUrl) localStorage.setItem('returnUrl', returnUrl);
    this.auth.login();
  }
}
