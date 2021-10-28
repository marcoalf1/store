import { Component } from "@angular/core";
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  template: `
    {{quantity$ | async | json }} - Quantity
    {{total$ | async | json }} - Total
    <!-- {{cart$ | async | json }} - Cart -->
  `,
  styleUrls: []
})
export class CartComponent {
  quantity$ = this.shoppingCartService.quantityAction$;
  total$ = this.shoppingCartService.totalAction$;
  cart$ = this.shoppingCartService.cartAction$;

  constructor(private shoppingCartService: ShoppingCartService) {}
}
