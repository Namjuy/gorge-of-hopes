import { Component, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetOptionComponent } from '../bottom-sheet-option/bottom-sheet-option.component';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrl: './language-picker.component.scss',
})
export class LanguagePickerComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openLanguageOption(): void {
    this._bottomSheet.open(BottomSheetOptionComponent);
  }
}
