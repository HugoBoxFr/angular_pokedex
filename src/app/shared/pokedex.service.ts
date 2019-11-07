import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './pokemon-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemonList: Pokemon[] = POKEMONS;
  pokemon: Pokemon;

  public getPokemons() : Pokemon[] {
    return POKEMONS;
  };

  public addPokemon(pokemon: Pokemon) {
    this.pokemonList.push(pokemon)
    // this.pokemon = new Pokemon();
  }

  constructor() { }

}
