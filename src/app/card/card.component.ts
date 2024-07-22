import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { CurrencyFormatterPipe } from '../currency-formatter.pipe';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, CurrencyFormatterPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() product: any; // берём данные из массива родительского контейнера
  public isLiked: boolean = false; // флаг для отслеживания статуса лайка
  public isInCart: boolean = false; // флаг для отслеживания статуса корзины

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

  addItem() {
    this.isInCart = true;
    alert("Додано в кошик!");
  }
}