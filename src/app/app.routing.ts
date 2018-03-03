import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGES
import { IndexComponent } from './pages/index/index.component';
import { PaypalCalcComponent } from './pages/paypal-calc/paypal-calc.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'calculadora-paypal', component: PaypalCalcComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'confirmation/:id', component: ConfirmationComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
