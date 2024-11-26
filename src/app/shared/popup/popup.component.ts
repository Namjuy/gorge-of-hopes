import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComponentPortal } from '@angular/cdk/portal';
import { Popup } from './model/Popup.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  componentPortal!: ComponentPortal<any>;

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Popup // Assuming Popup has Title and Component
  ) {}

  ngOnInit(): void {
    if (this.data.Component) {
      this.componentPortal = new ComponentPortal(this.data.Component);
    }
  }
}
