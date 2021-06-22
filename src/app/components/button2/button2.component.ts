import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.scss']
})
export class Button2Component {

  @Input() buttonText = '';
  @Output() buttonClickEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onButtonClick() {
    this.buttonClickEvent.emit();
  }

}
