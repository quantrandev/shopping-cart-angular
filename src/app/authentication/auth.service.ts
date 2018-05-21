import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { User } from '@firebase/auth-types';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  authState$;
  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService
  ) {
    this.authState$ = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get authUser$() {
    return this.afAuth.authState.switchMap(user => {
      if (user) return this.userService.get(user.uid);
      return Observable.of(null);
    });
  }
}
