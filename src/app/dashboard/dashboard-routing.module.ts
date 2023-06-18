import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

const routes: Routes = [
  { path: 'produtos', component: ProductComponent },
  { path: 'dashboard', component: HomeDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
