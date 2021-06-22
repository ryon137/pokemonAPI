import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText = '';
  @Output() buttonClickEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onButtonClick() {
    this.buttonClickEvent.emit();
  }

}
