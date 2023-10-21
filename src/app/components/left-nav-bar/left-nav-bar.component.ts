import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItem} from "../../menu-item";

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent {
  @Input() menuItems: MenuItem[]
  @Output() onItemClick: EventEmitter<MenuItem> = new EventEmitter()


  itemClick(item: MenuItem) {
    this.onItemClick.emit(item)
  }

}
