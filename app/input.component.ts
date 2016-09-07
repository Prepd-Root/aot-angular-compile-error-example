import { Component } from '@angular/core';

@Component({
  // this compiles
  // selector: '[playground-input]',
  
  // this doesn't
  selector: 'input[playground-input]',
  
  template: ``,
  styles: [`
    :host {
      height: 36px;
    }
  `]
})
export class InputComponent { }
