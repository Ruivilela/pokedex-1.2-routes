import { Component } from '@angular/core';
import { PokedexService } from './services/pokedex/pokedex.service';
import { Pokemon } from './model/pokemon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pokemon: Pokemon;
  
  constructor(private pokedexService: PokedexService) {}

  ngOnInit(){
   this.findPokemon(1); 
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
