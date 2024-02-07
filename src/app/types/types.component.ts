import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  types: any[];

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getAllTypes()
      .subscribe((response: any) => this.types = response.results);
  }

  ngOnInit(): void {
  }

}
