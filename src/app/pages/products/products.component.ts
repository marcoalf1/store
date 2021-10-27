import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void {
  }

}


// https://youtu.be/i-oYrcNtc2s?t=4436