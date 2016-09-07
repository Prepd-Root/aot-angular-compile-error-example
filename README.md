# aot-angular-compile-error-example
Example for a problem with AOT angular 2 compilation.

To run : <br/>
npm i <br/>
npm run ngc

#### Errors present
- in app/input.component.ts
  => selector: 'input[playground-input]' 
  => there is no </input> in the whole project

- in app/form.component.ts
  => form.controls.first compile error
  => there is no minify or code modification done before ngc
