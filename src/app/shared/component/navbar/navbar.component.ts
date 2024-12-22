import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { LoginComponent } from '../../../main/login/login.component';
import { RegisterComponent } from '../../../main/register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  dialog = inject(MatDialog);
  constructor() {}
  ngOnInit(): void {}

  login() {
    const dialogRef = this.dialog.open(PopupComponent, {
      height: 'fit-content',
      width: '700px',
      data: {
        Component: LoginComponent,
        Title: 'Đăng nhập',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  register() {
    const dialogRef = this.dialog.open(PopupComponent, {
      height: 'fit-content',
      width: '700px',
      data: {
        Component: RegisterComponent,
        Title: 'Đăng ký',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
