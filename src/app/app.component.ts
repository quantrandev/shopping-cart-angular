import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { UserService } from './authentication/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService
  ) {
    this.afAuth.authState.subscribe(user => {
      // save user to database
      if (user) this.userService.save(user);
    });
  }
}
