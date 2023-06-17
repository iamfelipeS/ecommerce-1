import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { ProductComponent } from './product/product.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';

@NgModule({
  declarations: [HomeDashboardComponent, ProductComponent, HeaderComponent, FooterComponent, NavComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
