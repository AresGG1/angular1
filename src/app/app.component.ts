import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./User";
import {MenuItem} from "./menu-item";
import {MENU_ITEMS} from "./menu-items";
import {Product} from "./Product";
import {PRODUCTS} from "./products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User
  isImageActive = false
  isList = true
  menuItems: MenuItem[]
  products: Product[]
  activeProduct: Product

  constructor(private service: UserService ) {
  }

  ngOnInit(): void {
    this.service.fetchUserData().subscribe((user) => this.user = user)
    this.menuItems = MENU_ITEMS
    this.products = PRODUCTS
  }
  triggerImageClick() {
    this.isImageActive = !this.isImageActive;
  }

  toggleItem(item: MenuItem) {
    this.menuItems.map((i) => i.active = false)
    item.active = true
  }

  getColor(product: Product): string {
    if (product.discount.isApplied) {
      return product.discount.discountedPrice > 40 ? 'red' : 'green'
    }

    return product.price > 40 ? 'red' : 'green'
  }
  showCard(product: Product) {
    this.isList = false
    this.activeProduct = product
  }
  showList() {
    this.isList = true
  }

}
