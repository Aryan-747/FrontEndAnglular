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
    name: 'Gaming Laptop',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd',
    category: 'Accessories'
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b',
    category: 'Accessories'
  },
  {
    id: 5,
    name: 'Office Chair',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1582582429416-8f6cfae5a2c4',
    category: 'Furniture'
  },
  {
    id: 6,
    name: 'Backpack',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764b94',
    category: 'Lifestyle'
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1585386959984-a41552262c6b',
    category: 'Electronics'
  },
  {
    id: 8,
    name: 'Running Shoes',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1528701800489-20be3c3e3c4f',
    category: 'Fashion'
  },
  {
    id: 9,
    name: 'Tablet',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04',
    category: 'Electronics'
  }
];


}
