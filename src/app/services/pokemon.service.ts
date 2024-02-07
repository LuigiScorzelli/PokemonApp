import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _query: string;
  private _pokemons: any[];
  private _types: any[];

  constructor(private http: HttpClient) {
    this.query = '';
    this.types = [];
    this.pokemons = [];
  }

  set query(q: string) {
    this._query = q;
  }

  get query(): string {
    return this._query;
  }

  set types(newTypes: any[]) {
    this._types = newTypes;
  }

  get types(): any[] {
    return this._types;
  }

  set pokemons(pokes: any[]) {
    this._pokemons = pokes;
  }

  get pokemons(): any[] {
    return this._pokemons;
  }

  getFilteredPokemons(name) {
    return this.pokemons.filter((pokemon: any) => pokemon.name.includes(name.toLowerCase()));
  }

  getPokemon(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  findAll() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
      .subscribe((response: any) => this.pokemons = response.results);
  }

  getAllTypes() {
    return this.http.get('https://pokeapi.co/api/v2/type?limit=20');
  }

  getType(type: string) {
    return this.http.get(`https://pokeapi.co/api/v2/type/${type}`);
  }
}
