import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  features: any[] = [
    {
      id: '1',
      name: 'Áo',
      description: 'Description for product 1',
      price: 100,
      image1: '../../../assets/images/clothes-male.jfif',
      image2: '../../../assets/images/clothes-female.jfif',
    },
    {
      id: '2',
      name: 'Quần',
      description: 'Description for product 2',
      price: 200,
      image1: '../../../assets/images/jeans-male.jfif',
      image2: '../../../assets/images/jeans-male.jfif',
    },
    {
      id: '3',
      name: 'Giày',
      description: 'Description for product 3',
      price: 300,
      image1: 'https://via.placeholder.com/150',
      image2: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      name: 'Váy',
      description: 'Description for product 4',
      price: 400,
      image1: 'https://via.placeholder.com/150',
      image2: 'https://via.placeholder.com/150',
    },
  ];
}
