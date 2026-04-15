import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {

    products = [
    {
      id: 1,
      name: 'Laptop',
      price: 50000,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Mobile',
      price: 20000,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 2000,
      image: 'https://via.placeholder.com/150'
    }
  ];

}
