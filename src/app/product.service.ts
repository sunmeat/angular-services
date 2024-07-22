import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products : Product[] = [
    { title: 'Портативний настільний вентилятор',
      description: 'Настільний вентилятор GXQC D607 з прищіпкою білий – компактний та потужний',
      price: 1677, imageUrl: 'https://content.rozetka.com.ua/goods/images/preview/348557631.jpg' },
    { title: 'Вентилятор ARDESTO FNT-R44X1W',
      description: 'Максимальна потужність: 50 Вт, габарити 110 х 31 х 31см',
      price: 2555, imageUrl: 'https://content2.rozetka.com.ua/goods/images/preview/133591940.jpg' },
    { title: 'Портативний вентилятор Arctic Cool',
      description: 'Ідеально підходить для охолодження в приміщенні або на вулиці',
      price: 220, imageUrl: 'https://content.rozetka.com.ua/goods/images/preview/426043854.jpg' },
    { title: 'Міні-вентилятор Portable Fan Mini Білий',
      description: 'Потужний повітряний потік',
      price: 470, imageUrl: 'https://content2.rozetka.com.ua/goods/images/preview/445263713.jpg' },
    { title: 'Вентилятор настільний побутовий компактний',
      description: 'Максимальна потужність: 30 Вт',
      price: 649, imageUrl: 'https://content1.rozetka.com.ua/goods/images/preview/196537246.jpg' }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}