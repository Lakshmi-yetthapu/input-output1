import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-productsapp-filter-products',
  imports: [FormsModule],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})
export class FilterProductsComponent {
@Input()
all : number = 0

@Input()
inStock : number = 0 

@Input() 
outOfStock: number = 0

@Output()
selectFilterEvent : EventEmitter<string> = new EventEmitter<string>();

selectedFilter : string = 'all'

selectedFilterChanged() {
  this.selectFilterEvent.emit(this.selectedFilter)
}

}
