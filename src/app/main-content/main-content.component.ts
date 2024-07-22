import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ProductService } from '../product.service'; 
import { Product } from '../product.model';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})

export class MainContentComponent implements OnInit, OnChanges {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  @Input() searchText: string = '';

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    //console.log('Search text changed:', this.searchText);
    if (changes['searchText']) {
      this.filterProducts(this.searchText);
    }
  }

  private filterProducts(searchText: string): void {
    //console.log('Filtering with text:', searchText);
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    //console.log('Filtered products:', this.filteredProducts);
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    //console.log('Products loaded:', this.products);
    this.filteredProducts = this.products;
  }
}