import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: '../app/admin/admin.module#AdminModule', canActivate: [AuthGuard, AdminGuard] }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
