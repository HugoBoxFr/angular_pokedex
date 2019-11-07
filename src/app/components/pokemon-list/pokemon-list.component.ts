import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  public title: string = "Pokemons"
  public pokemons: Pokemon[];
  @Input() pokemonAAfficher : Pokemon[];
  @Output() pokemonEvent = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit() {
  }

  onPokemonClicked(index: Pokemon) {
    console.log(index);
    this.pokemonEvent.emit(index);
  }

}
