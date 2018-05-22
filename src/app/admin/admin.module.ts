import { AdminRoutes } from './admin-routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminCategoryService } from './admin-category/admin-category.service';

@NgModule({
  declarations: [AdminProductComponent, AdminProductFormComponent],
  imports: [AdminRoutes, CommonModule],
  providers: [AdminCategoryService]
})
export class AdminModule {}
