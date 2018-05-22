import { AdminCategoryService } from './../admin-category/admin-category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  categories$;
  constructor(private categoryService: AdminCategoryService) {
    this.categories$ = this.categoryService.getAll();
  }

  ngOnInit() {}
}
