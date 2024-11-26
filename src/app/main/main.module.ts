import { NgModule } from '@angular/core';
import { ProductModule } from './products/product.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [ProductModule, MaterialModule, ReactiveFormsModule, CommonModule],
  exports: [], // Xuất component để sử dụng ở module khác
})
export class MainModule {}
