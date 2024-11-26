import { NgModule } from '@angular/core';
import { ShoesProductComponent } from './shoes-product/shoes-product.component';
import { WatchProductComponent } from './watch-product/watch-product.component';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from '../../shared/table/table.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [ShoesProductComponent, WatchProductComponent],
  imports: [SharedModule, PortalModule],
  exports: [ShoesProductComponent, WatchProductComponent], // Xuất component để sử dụng ở module khác
})
export class ProductModule {}
