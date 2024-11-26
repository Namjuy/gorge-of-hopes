import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { ShoesProductComponent } from './main/products/shoes-product/shoes-product.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shoes-product', component: ShoesProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
