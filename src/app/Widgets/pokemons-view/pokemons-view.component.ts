import { Component, Input, OnInit } from '@angular/core';
import {
  concat,
  concatAll,
  map,
  mergeMap,
  observable,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { CommonComponent } from 'src/app/Models/common-component/common.component';
import { Pokemon, Pokemons } from 'src/app/Models/Pokemon';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-pokemons-view',
  templateUrl: './pokemons-view.component.html',
  styleUrls: ['./pokemons-view.component.css'],
})
export class PokemonsViewComponent extends CommonComponent implements OnInit {
  pokemon: Pokemon;
  showPokemon: boolean = false;
  pickedPockemon: string;
  showPokemonLoader: boolean = false;
  constructor(private pokeApi: ApiService) {
    super();
  }
  allPokemons: Array<Pokemons>;
  loading: boolean = true;
  pokeAbil: any;
  ngOnInit() {
    this.pokeApi.getPokemons().subscribe((res) => {
      this.allPokemons = res;
      this.loading = false;
    });
  }
  getBackPokemon(): void {
    this.showPokemonLoader = true;
    this.showPokemon = false;
    // this.pokeApi.getPokemon(`https://pokeapi.co/api/v2/pokemon/${this.pickedPockemon}`).pipe(tap(res => {
    //   this.pokemon = new Pokemon();
    //   this.pokemon.id = res.id;
    //   this.pokemon.name = res.name;
    //   this.pokemon.photo = res.sprites.other.dream_world.front_default;
    // }), map(res => res.id)).subscribe(res => {
    //   this.pokeApi.getPokemon(`https://pokeapi.co/api/v2/ability/${res}`).subscribe(res => {
    //     this.pokemon.pokeAbility = res.effect_entries[1].effect
    //     this.showPokemonLoader = false;
    //     this.showPokemon = true
    //   })
    // })
    // this.pokeApi.getPokemon(`https://pokeapi.co/api/v2/pokemon/${this.pickedPockemon}`).pipe(tap(res => {
    //   this.pokemon = new Pokemon();
    //   this.pokemon.id = res.id;
    //   this.pokemon.name = res.name;
    //   this.pokemon.photo = res.sprites.other.dream_world.front_default;
    // }), mergeMap(res => this.pokeApi.getPokemon(`https://pokeapi.co/api/v2/ability/${res.id}`))).pipe(tap(res => {
    //   this.pokemon.pokeAbility = res.effect_entries[1].effect
    //
    // })).subscribe()

    // this.getPokemonObs(this.pickedPockemon).subscribe((res) => {
    //   this.pokemon = new Pokemon();
    //   this.pokemon.id = res.id;
    //   this.pokemon.name = res.name;
    //   this.pokemon.photo = res.photo;
    //   this.pokemon.pokeAbility = res.pokeAbility
    //   this.showPokemonLoader = false
    //   this.showPokemon = true
    // }
    // );
    this.pokeApi
      .getPokemon(this.pickedPockemon)
      .pipe(
        mergeMap((pokeData) => {
          return this.pokeApi.getPokemonAbility(pokeData.id).pipe(
            map((abilities) => {
              pokeData.pokeAbility = abilities;
              return pokeData;
            })
          );
        })
      )
      .subscribe((res) => {
        this.pokemon = new Pokemon();
        this.pokemon.id = res.id;
        this.pokemon.name = res.name;
        this.pokemon.photo = res.photo;
        this.pokemon.pokeAbility = res.pokeAbility;
        this.showPokemonLoader = false;
        this.showPokemon = true;
      });
  }

  getPokemonObs(name: string): Observable<Pokemon> {
    return this.pokeApi.getPokemon(name).pipe(
      mergeMap((pokeData) => {
        return this.pokeApi.getPokemonAbility(pokeData.id).pipe(
          map((abilities) => {
            pokeData.pokeAbility = abilities;
            return pokeData;
          })
        );
      })
    );
    // return this.pokeApi.getPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(map(res =>
    //   this.pokeApi.getPokemon(`https://pokeapi.co/api/v2/ability/${res.id}`)), concatAll())
  }
  getPokemonByName(name: string): Observable<string> {
    return this.pokeApi
      .getPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        map((x) => {
          return 'cile';
        })
      );
  }
}
