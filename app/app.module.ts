import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, SharedModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
