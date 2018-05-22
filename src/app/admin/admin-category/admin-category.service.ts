import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminCategoryService {
  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db.list('/categories').snapshotChanges();
  }
}
