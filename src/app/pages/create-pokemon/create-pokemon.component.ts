import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';
import { POKEMONS } from 'src/app/shared/pokemon-mock';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();
  pokemonList = POKEMONS;

  constructor(private pokemonService : PokedexService, private router: Router) { }

  ngOnInit() {
  }

  add(pokemon: Pokemon) {
    this.pokemonService.addPokemon(pokemon);
    this.router.navigate(['/']);
    //console.log(pokemon)
    this.pokemon = new Pokemon();
  };


}
