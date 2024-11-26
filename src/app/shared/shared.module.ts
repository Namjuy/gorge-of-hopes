import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomSheetOptionComponent } from './component/bottom-sheet-option/bottom-sheet-option.component';

import { PopupComponent } from './component/popup/popup.component';
import { AutoCompleteComponent } from './component/auto-complete/auto-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PortalModule } from '@angular/cdk/portal';
import { LanguagePickerComponent } from './component/language-picker/language-picker.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { TableComponent } from './component/table/table/table.component';

// Import the Material Module

@NgModule({
  declarations: [
    NavbarComponent,
    LanguagePickerComponent,
    BottomSheetOptionComponent,
    TableComponent,
    PopupComponent,
    AutoCompleteComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule, // Use MaterialModule here
    PortalModule,
  ],
  exports: [
    NavbarComponent,
    BottomSheetOptionComponent,
    LanguagePickerComponent,
    TableComponent,
    PopupComponent,
  ],
})
export class SharedModule {}
