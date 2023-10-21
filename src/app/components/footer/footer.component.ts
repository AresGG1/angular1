import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItem} from "../../menu-item";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() menuItems: MenuItem[]
  @Output() onItemClick: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

  itemClick(item: MenuItem) {
    this.onItemClick.emit(item)
  }
}
