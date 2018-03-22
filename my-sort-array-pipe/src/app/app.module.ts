import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MySortArrayPipe } from './my-sort-array.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MySortArrayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
