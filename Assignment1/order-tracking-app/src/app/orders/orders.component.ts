import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatusPipe } from '../order-status-pipe';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, OrderStatusPipe],
  templateUrl: './orders.component.html'
})
export class OrdersComponent {

  orders = [
    { id: 1, product: 'Laptop', price: 55000, date: new Date(), status: 1 },
    { id: 2, product: 'Phone', price: 20000, date: new Date(), status: 2 },
    { id: 3, product: 'Shoes', price: 3000, date: new Date(), status: 3 }
  ];
}