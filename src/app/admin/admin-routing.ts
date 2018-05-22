import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  { path: 'products/new', component: AdminProductFormComponent },
  {
    path: 'products',
    component: AdminProductComponent
  }
];

export const AdminRoutes = RouterModule.forChild(adminRoutes);
