import { Component } from '@angular/core';
import { PokedexService } from './services/pokedex/pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent{
  pokemon

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(){
    this.pokedexService.getPokemon(1).subscribe(
      result => {this.pokemon = result }
    )
  }
}
