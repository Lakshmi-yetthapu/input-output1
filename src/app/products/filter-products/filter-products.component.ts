import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-productsapp-filter-products',
  imports: [],
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

}
