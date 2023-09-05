import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { PrimeroComponent } from './primero/primero.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    PrimeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
