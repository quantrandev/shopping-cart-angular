import { AdminProductService } from './admin-product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  products$;
  searchName = '';
  constructor(private productService: AdminProductService) {
    this.products$ = this.productService.getAll();
  }

  ngOnInit() {}
}
