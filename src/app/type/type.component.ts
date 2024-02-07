import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  type: string;
  pokemonByType: any[];

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.route.params.subscribe(params => this.type = params.type);
    this.pokemonService.getType(this.type).subscribe((res: any) => {
      this.pokemonByType = res.pokemon;
    });
  }

  ngOnInit(): void {
  }

}
