import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminProductService {
  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db.list('/products').snapshotChanges();
  }

  get(productId: string) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  create(product) {
    return this.db.list('/products').push(product);
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }
}
