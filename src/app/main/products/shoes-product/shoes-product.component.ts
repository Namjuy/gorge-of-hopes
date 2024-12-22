import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../shared/component/popup/popup.component';
import { LoginComponent } from '../../login/login.component';
import { DataGrid } from '../../../shared/component/table/table/table.model';
import { Pagination } from '../../../shared/component/pagination/model/pagination.model';

@Component({
  selector: 'app-shoes-product',
  templateUrl: './shoes-product.component.html',
  styleUrl: './shoes-product.component.scss',
})
export class ShoesProductComponent implements OnInit {
  gridDataList: any;
  dataGridColumn: DataGrid[] = [
    { HeaderTitle: 'Tên', Field: 'name' },
    { HeaderTitle: 'SĐT', Field: 'phoneNumber' },
    { HeaderTitle: 'Địa chỉ', Field: 'address.addressName' },
    { HeaderTitle: 'Tuổi', Field: 'age' },
    { HeaderTitle: 'Email', Field: 'email' },
    { HeaderTitle: 'CCCD', Field: 'address.citizenIdentification' },
    { HeaderTitle: 'Tọa đô', Field: 'address.latLng.lat' },
  ];
  constructor(public dialog: MatDialog) {
    this.gridDataList = [
      {
        id: 1,
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        age: 25,
        phoneNumber: '0123456789',
        address: {
          addressName: '123 Đường ABC, Quận 1, TP.HCM',
          latLng: {
            lat: 10.7769,
            lng: 106.6951,
          },
          citizenIdentification: '123456789012',
        },
      },
      {
        id: 2,
        name: 'Trần Thị B',
        email: 'tranthib@example.com',
        age: 30,
        phoneNumber: '0987654321',
        address: {
          addressName: '456 Đường DEF, Quận 2, TP.HCM',
          latLng: {
            lat: 10.7945,
            lng: 106.6995,
          },
          citizenIdentification: '234567890123',
        },
      },
      {
        id: 3,
        name: 'Lê Văn C',
        email: 'levanc@example.com',
        age: 28,
        phoneNumber: '0912345678',
        address: {
          addressName: '789 Đường GHI, Quận 3, TP.HCM',
          latLng: {
            lat: 10.7765,
            lng: 106.699,
          },
          citizenIdentification: '345678901234',
        },
      },
      {
        id: 4,
        name: 'Phạm Thị D',
        email: 'phamthid@example.com',
        age: 22,
        phoneNumber: '0976543210',
        address: {
          addressName: '321 Đường JKL, Quận 4, TP.HCM',
          latLng: {
            lat: 10.7626,
            lng: 106.7106,
          },
          citizenIdentification: '456789012345',
        },
      },
      {
        id: 5,
        name: 'Trần Văn E',
        email: 'tranvene@example.com',
        age: 35,
        phoneNumber: '0901234567',
        address: {
          addressName: '654 Đường MNO, Quận 5, TP.HCM',
          latLng: {
            lat: 10.746,
            lng: 106.6615,
          },
          citizenIdentification: '567890123456',
        },
      },
      {
        id: 6,
        name: 'Nguyễn Thị F',
        email: 'nguyenthif@example.com',
        age: 29,
        phoneNumber: '0934567890',
        address: {
          addressName: '987 Đường PQR, Quận 6, TP.HCM',
          latLng: {
            lat: 10.7556,
            lng: 106.6361,
          },
          citizenIdentification: '678901234567',
        },
      },
      {
        id: 7,
        name: 'Lê Thị G',
        email: 'lethig@example.com',
        age: 31,
        phoneNumber: '0945678901',
        address: {
          addressName: '111 Đường STU, Quận 7, TP.HCM',
          latLng: {
            lat: 10.7047,
            lng: 106.7072,
          },
          citizenIdentification: '789012345678',
        },
      },
      {
        id: 8,
        name: 'Phạm Văn H',
        email: 'phamvanh@example.com',
        age: 27,
        phoneNumber: '0956789012',
        address: {
          addressName: '222 Đường VWX, Quận 8, TP.HCM',
          latLng: {
            lat: 10.709,
            lng: 106.5987,
          },
          citizenIdentification: '890123456789',
        },
      },
      {
        id: 9,
        name: 'Nguyễn Văn I',
        email: 'nguyenvani@example.com',
        age: 24,
        phoneNumber: '0967890123',
        address: {
          addressName: '333 Đường YZ, Quận 9, TP.HCM',
          latLng: {
            lat: 10.823,
            lng: 106.7045,
          },
          citizenIdentification: '901234567890',
        },
      },
      {
        id: 10,
        name: 'Trần Thị J',
        email: 'tranthij@example.com',
        age: 26,
        phoneNumber: '0978901234',
        address: {
          addressName: '444 Đường ABC, Quận 10, TP.HCM',
          latLng: {
            lat: 10.7608,
            lng: 106.6503,
          },
          citizenIdentification: '012345678901',
        },
      },
    ];
  }
  ngOnInit(): void {}

  getPagination(event: Pagination) {
    console.log(event);
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent, {
      height: 'fit-content',
      width: '700px',
      data: {
        Component: LoginComponent,
        Title: 'Đăng ký',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
