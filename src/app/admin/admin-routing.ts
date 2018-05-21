import { AdminProductComponent } from './admin-product/admin-product.component';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  { path: 'products', component: AdminProductComponent }
];

export const AdminRoutes = RouterModule.forChild(adminRoutes);
