import { AdminProductService } from './admin-product/admin-product.service';
import { AdminRoutes } from './admin-routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomFormsModule } from 'ng2-validation';

import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminCategoryService } from './admin-category/admin-category.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminProductComponent, AdminProductFormComponent],
  imports: [AdminRoutes, CommonModule, FormsModule, CustomFormsModule],
  providers: [AdminCategoryService, AdminProductService]
})
export class AdminModule {}
