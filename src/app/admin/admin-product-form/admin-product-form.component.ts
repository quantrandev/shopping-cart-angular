import { AdminProductService } from './../admin-product/admin-product.service';
import { AdminCategoryService } from './../admin-category/admin-category.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  categories$;
  successMessage: string;
  constructor(
    private categoryService: AdminCategoryService,
    private productService: AdminProductService
  ) {
    this.categories$ = this.categoryService.getAll();
  }

  ngOnInit() {}

  save(f: NgForm) {
    this.productService.create(f.value).then(res => {
      this.successMessage = f.value.title + ' was added';
      f.reset();
    });
  }
}
