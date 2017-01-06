import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

/* Import service here */
import {PokedexService } from './services/pokedex/pokedex.service' 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule  
  ],
  /* in our providers array we'll register our service */
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
