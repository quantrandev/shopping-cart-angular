import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { UserService } from './authentication/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // save user to database
        this.userService.save(user);
        // redirect to returnUrl if existed
        const returnUrl = localStorage.getItem('returnUrl');
        if (returnUrl) {
          this.router.navigate([returnUrl]);
          localStorage.removeItem('returnUrl');
        }
      }
    });
  }
}
