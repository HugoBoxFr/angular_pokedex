import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {
  pokemonDetail: Pokemon;
  tableauDepokemons : Pokemon[];

  constructor(private pokemonService: PokedexService) { }

  ngOnInit() {
    this.tableauDepokemons = this.pokemonService.pokemonList;
  }

  onPokemonSelected(index: Pokemon) {
    this.pokemonDetail = index;
  }

}
