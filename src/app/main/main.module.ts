import { NgModule } from '@angular/core';
import { ProductModule } from './products/product.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
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
