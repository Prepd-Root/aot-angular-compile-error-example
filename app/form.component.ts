import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'playground-form',
  
  // this compiles :
  /*
  template: `
    <form [formGroup]="form">
        <input type="text" [formControl]="form.controls['first']" playground-input>
        <input type="text" [formControl]="form.controls['second']" playground-input>
        <input type="text" [formControl]="form.controls['third']" playground-input>
    </form>
  `
  */
  
  //this doesn't :
  template: `
    <form [formGroup]="form">
        <input type="text" [formControl]="form.controls.first" playground-input>
        <input type="text" [formControl]="form.controls.second" playground-input>
        <input type="text" [formControl]="form.controls.third" playground-input>
    </form>
  `
  
})
export class FormComponent {
  form = new FormGroup({
    first: new FormControl(null, Validators.required),
    second: new FormControl(null, Validators.required),
    third: new FormControl(null, Validators.required)
  });
}
