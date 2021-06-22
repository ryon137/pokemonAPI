import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { Button2Component } from './components/button2/button2.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PokemonComponent,
    Button2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
