import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TerceroComponent } from './tercero/tercero.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
