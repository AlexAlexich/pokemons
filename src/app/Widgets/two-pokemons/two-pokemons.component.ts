import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, combineLatest, concat, tap, map } from 'rxjs';
import { CommonComponent } from 'src/app/Models/common-component/common.component';
import { Pokemon } from 'src/app/Models/Pokemon';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-two-pokemons',
  templateUrl: './two-pokemons.component.html',
  styleUrls: ['./two-pokemons.component.css'],
})
export class TwoPokemonsComponent extends CommonComponent implements OnInit {
  loading: boolean = true;
  pokemon: Pokemon = new Pokemon();
  pokemon2: Pokemon = new Pokemon();
  constructor(private pokeApi: ApiService) {
    super();
  }

  ngOnInit() {
    forkJoin([
      this.callPokemon('pikachu', this.pokemon),
      this.callPokemon('charizard', this.pokemon2),
    ]).subscribe(() => {
      this.loading = false;
    });
  }
  callPokemon(name: string, pokeObj: Pokemon): Observable<void> {
    return this.pokeApi.getPokemon(name).pipe(
      map((res) => {
        pokeObj.id = res.id;
        pokeObj.name = res.name;
      })
    );
  }
}
