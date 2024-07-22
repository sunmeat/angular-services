# Rozetka

Результат на 11.07.2024:
![Results](https://raw.githubusercontent.com/sunmeat/angular-rozetka/master/result.png)

Делал по образцу:
![Results](https://raw.githubusercontent.com/sunmeat/angular-rozetka/master/%D1%80%D0%B5%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%81%20%D0%B4%D0%BB%D1%8F%20%D0%B2%D1%91%D1%80%D1%81%D1%82%D0%BA%D0%B8.png)

```
в компоненте main-content есть директива ngFor для генерации 5 карточек
<app-card *ngFor="let product of products" [product]="product"></app-card>

в компоненте card есть директива ngIf для скрытия кнопки "добавить в корзину"
<button class="add-to-cart-button" (click)="addItem()" *ngIf="!isInCart">Додати в кошик</button>

также в карточке применяется кастомный пайп, потому что стандартный CurrencyPipe мне не понравился :)
<!--<p class="product-price">{{product.price | currency:'UAH':'symbol-narrow'}}</p>-->
<p class="product-price">{{product.price | currencyFormatter:'₴':'right'}}</p>
```
