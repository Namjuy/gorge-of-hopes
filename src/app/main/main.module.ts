import { NgModule } from '@angular/core';
import { ProductModule } from './products/product.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CatergoryComponent } from './catergory/catergory.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, CheckoutComponent, UserProfileComponent, OrderHistoryComponent, CatergoryComponent, AdminComponent],
  imports: [
    ProductModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [], // Xuất component để sử dụng ở module khác
})
export class MainModule {}
