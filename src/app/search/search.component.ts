import { Component } from '@angular/core';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  q: string;
  results: any[];

  constructor(private pokemonService: PokemonService) {
    this.q = this.pokemonService.query;
    if (this.q !== '') {
      this.submit(this.q);
    }
  }

  submit(query: string): void {
    this.pokemonService.query = query;
    this.results = this.pokemonService.getFilteredPokemons(query);
  }
}
