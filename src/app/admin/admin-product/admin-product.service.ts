import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminProductService {
  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db.list('/products').snapshotChanges();
  }

  create(product) {
    return this.db.list('/products').push(product);
  }
}
