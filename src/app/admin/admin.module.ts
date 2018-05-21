import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminRoutes } from './admin-routing';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AdminProductComponent],
  imports: [AdminRoutes]
})
export class AdminModule {}
