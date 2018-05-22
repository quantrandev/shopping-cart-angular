import { AdminCategoryService } from './../admin-category/admin-category.service';
import { AdminProductService } from './admin-product.service';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  currentPage = 1;
  products$;
  categories$;
  searchName = '';
  searchCategory = '';
  constructor(
    private productService: AdminProductService,
    private categoryService: AdminCategoryService
  ) {
    this.products$ = this.productService.getAll();
    this.categories$ = this.categoryService.getAll();
  }

  ngOnInit() {}
}
