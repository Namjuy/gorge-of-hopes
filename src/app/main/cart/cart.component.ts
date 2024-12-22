import { Component } from '@angular/core';
import { CartItem } from './model/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: CartItem[] = [
    new CartItem(
      'Product 1',
      'Description for product 1',
      100,
      1,
      'https://via.placeholder.com/150'
    ),
    new CartItem(
      'Product 2',
      'Description for product 2',
      200,
      2,
      'https://via.placeholder.com/150'
    ),
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
