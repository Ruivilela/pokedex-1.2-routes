import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

/* Import service here */
import { PokedexService } from './services/pokedex/pokedex.service' 

/* Router package import goes here */ 
import {RouterModule, Routes } from '@angular/router';
/* Component imports for the routes */ 
import {PokedexComponent} from './component/pokedex/pokedex.component'; 
import {PokemonSearchComponent} from './component/pokemon-search/pokemon-search.component';

const appRoutes: Routes = [
  {path: '', component:PokemonSearchComponent},
  {path: 'pokedex', component: PokedexComponent} 
];  

@NgModule({
  declarations: [
    AppComponent, 
    PokedexComponent,
    PokemonSearchComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(appRoutes)  
  ],
  /* in our providers array we'll register our service */
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
