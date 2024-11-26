import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { BottomSheetOptionComponent } from './bottom-sheet-option/bottom-sheet-option.component';
import { TableComponent } from './table/table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopupComponent } from './popup/popup.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

// Import the Material Module

@NgModule({
  declarations: [
    NavbarComponent,
    LanguagePickerComponent,
    BottomSheetOptionComponent,
    TableComponent,
    PaginationComponent,
    PopupComponent,
    AutoCompleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule, // Use MaterialModule here
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
