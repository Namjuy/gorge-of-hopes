import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-option',
  templateUrl: './bottom-sheet-option.component.html',
  styleUrl: './bottom-sheet-option.component.scss',
})
export class BottomSheetOptionComponent {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOptionComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
