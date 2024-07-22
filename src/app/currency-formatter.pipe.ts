import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter',
  standalone: true
})

export class CurrencyFormatterPipe implements PipeTransform {
  transform(value: number, currency: string = '₴', position: 'left' | 'right' = 'right') : string {
    if (position === 'right') {
      return `${value} ${currency}`;
    } else {
      return `${currency} ${value}`;
    }
  }
}