import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { ProductComponent } from './product/product.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [HomeDashboardComponent, ProductComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
