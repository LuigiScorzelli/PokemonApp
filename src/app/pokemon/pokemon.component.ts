import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  name: string;
  detail: any = null;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.route.params.subscribe(params => this.name = params.name);
    this.pokemonService.getPokemon(this.name).subscribe((res: any) => {
      this.detail = {
        abilities: res.abilities,
        height: res.height,
        weight: res.weight,
        name: res.name,
        sprites: res.sprites.front_default,
        stats: res.stats
      };
    });
  }

  ngOnInit(): void {
  }

}
