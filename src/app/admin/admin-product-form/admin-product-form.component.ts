import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AdminProductService } from './../admin-product/admin-product.service';
import { AdminCategoryService } from './../admin-category/admin-category.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  categories$;
  successMessage: string;
  product = {};
  constructor(
    private categoryService: AdminCategoryService,
    private productService: AdminProductService,
    private route: ActivatedRoute
  ) {
    // categories for dropdown
    this.categories$ = this.categoryService.getAll();

    // product binding with available
    const productId = this.route.snapshot.params.id;
    if (productId)
      this.productService
        .get(productId)
        .subscribe(product => (this.product = product));
  }

  ngOnInit() {}

  save(f: NgForm) {
    if (f.invalid) return;

    const productId = this.route.snapshot.params.id;
    if (productId)
      this.productService
        .update(productId, f.value)
        .then(res => (this.successMessage = f.value.title + ' was updated'));
    else
      this.productService.create(f.value).then(res => {
        this.successMessage = f.value.title + ' was added';
        f.resetForm();
      });
  }
}
