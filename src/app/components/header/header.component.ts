import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() user: User
  @Output() onClickImage = new EventEmitter();

  onClick() {
    this.onClickImage.emit()
  }
}
