# aot-angular-compile-error-example
Example for a problem with AOT angular 2 compilation.

To run : <br/>
npm i <br/>
npm run ngc

#### Errors present
- in app/input.component.ts <br/>
  => selector: 'input[playground-input]' compile error <br/>
  => there is no </input> in the whole project <br/>

- in app/form.component.ts <br/>
  => form.controls.first compile error <br/>
  => there is no minify or code modification done before ngc <br/>
