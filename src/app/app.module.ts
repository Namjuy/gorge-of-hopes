import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './main/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductModule } from './main/products/product.module';
import { HomeComponent } from './main/home/home.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductModule,
    PortalModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
