import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CategoriesComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  searchText: string = '';
  title = 'Rozetka';

  onSearchTextChanged(searchText: string): void {
    this.searchText = searchText;
  }
}