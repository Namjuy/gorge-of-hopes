import { Component, OnInit } from '@angular/core';

interface CartItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-shoes-product',
  templateUrl: './shoes-product.component.html',
  styleUrls: ['./shoes-product.component.scss'],
})
export class ShoesProductComponent implements OnInit {
  cartItems: CartItem[] = [
    {
      name: 'Product 1',
      description: 'Description for product 1',
      price: 100,
      quantity: 1,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 2',
      description: 'Description for product 2',
      price: 200,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  increaseQuantity(item: CartItem): void {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem !== item);
  }

  checkout(): void {
    // Handle checkout logic
    console.log('Proceeding to checkout');
  }
}
