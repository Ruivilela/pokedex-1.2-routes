import { Component } from '@angular/core';
import { PokedexService } from '../../services/pokedex/pokedex.service';
import { Pokemon } from '../../model/pokemon'

@Component({
  selector: 'pokemon-search-component',
  templateUrl: './pokemon-search.component.html', 
  styleUrls: ['./pokemon-search.component.css']
})

export class PokemonSearchComponent {
  pokemon: Pokemon;
  
  constructor(private pokedexService: PokedexService) {}

  ngOnInit(){
   this.findPokemon(25); 
  }

  findPokemon(index:number){
    this.pokedexService.getPokemon(index).subscribe(
      result => { this.pokemon = result }
    )
  }

  onClick(index:number){
    this.findPokemon(index);
  }
}