import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Pokemon } from '../../model/pokemon'; 

/* Rx.js function we will be using */
import 'rxjs/add/operator/map'; 

@Injectable()
export class PokedexService {
  private baseUrl: string ='https://pokeapi.co/api/v2/';
  
  constructor(private http: Http) { }
  
  getPokemon(index:number) : Observable<Pokemon> {
    return this.http.get(`${this.baseUrl}pokemon/${index}`)
              .map((result:Response) =>  result.json().name);  
  }
}

