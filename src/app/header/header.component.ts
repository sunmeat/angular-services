import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: []
})

export class HeaderComponent {

  searchText: string = '';

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value;
    this.searchChanged.emit(this.searchText);
    // alert('Пошук ' + this.searchText + " почався...");
  }

  @Output() searchChanged = new EventEmitter<string>();

}