import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Popup } from '../popup/model/Popup.model';
import { LoginComponent } from '../../main/login/login.component';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  dialog = inject(MatDialog);
  constructor() {}
  ngOnInit(): void {}

  openLoginDialog() {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        Component: LoginComponent,
        title: 'Đăng ký',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
