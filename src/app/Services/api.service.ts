import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiReturn } from '../Models/ApiReturn';
import {
  getPokemonAbility,
  Pokemon,
  PokemonAbility,
  PokemonGet,
  Pokemons,
} from '../Models/Pokemon';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
  };
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Array<Pokemons>> {
    return this.http
      .get<ApiReturn<Pokemons>>(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100',
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((x) => {
          return x.results;
        })
      );
  }
  getPokemon(name: string): Observable<Pokemon> {
    return this.http
      .get<PokemonGet>(`https://pokeapi.co/api/v2/pokemon/${name}`, {
        headers: this.headers,
      })
      .pipe(
        map((x) => {
          return {
            id: x.id,
            name: x.name,
            photo: x.sprites.other.dream_world.front_default,
            pokeAbility: '',
          };
        })
      );
  }
  getPokemonAbility(id: string): Observable<string> {
    return this.http
      .get<getPokemonAbility>(`https://pokeapi.co/api/v2/ability/${id}`, {
        headers: this.headers,
      })
      .pipe(
        map((x) => {
          return x.effect_entries[1].effect;
        })
      );
  }
}
