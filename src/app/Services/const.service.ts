import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstService {
  static readonly pokemonpicker: string = 'pockemon-picker';
  static readonly pokemonReloader: string = 'pokemon-reloader';
  static readonly canLeave: string = 'canLeave';
  static readonly twoPokemons: string = 'two-pokemons';

  constructor() { }
}
