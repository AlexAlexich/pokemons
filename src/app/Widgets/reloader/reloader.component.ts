import { Component, OnInit } from '@angular/core';
import {
  interval,
  map,
  mergeMap,
  Observable,
  Subject,
  Subscription,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { CommonComponent } from 'src/app/Models/common-component/common.component';
import { Pokemon } from 'src/app/Models/Pokemon';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-reloader',
  templateUrl: './reloader.component.html',
  styleUrls: ['./reloader.component.css'],
})
export class ReloaderComponent extends CommonComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();
  pokemon2: Pokemon = new Pokemon();
  constructor(private pokeApi: ApiService) {
    super();
  }

  loading: boolean = true;
  loading2: boolean = true;

  isClicked: boolean = false;
  isClicked2: boolean = false;

  time: Date;
  time2: Date;

  subscription: Subscription;
  destroy$: Subject<void> = new Subject<void>();
  destroy2$: Subject<void> = new Subject<void>();

  ngOnInit() {}
  loadPokemon(): void {
    this.isClicked = true;
    this.stopLoading();
    timer(0, 5000)
      .pipe(
        mergeMap(() => {
          return this.pokeApi.getPokemon('pikachu');
        }),
        takeUntil(this.destroy$),
        takeUntil(this.localNgUnsubscribe)
      )
      .subscribe((res) => {
        this.pokemon.id = res.id;
        this.pokemon.name = res.name;
        this.loading = false;
        this.time = new Date();
      });
  }
  loadPokemon2(): void {
    this.isClicked2 = true;
    this.stopLoading2();
    timer(0, 5000)
      .pipe(
        mergeMap(() => {
          return this.pokeApi.getPokemon('charizard');
        }),
        takeUntil(this.destroy2$),
        takeUntil(this.localNgUnsubscribe)
      )
      .subscribe((res) => {
        this.pokemon2.id = res.id;
        this.pokemon2.name = res.name;
        this.loading2 = false;
        this.time2 = new Date();
      });
  }
  stopLoading() {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$ = new Subject<void>();
  }
  stopLoading2() {
    this.destroy2$.next();
    this.destroy2$.complete();
    this.destroy2$ = new Subject<void>();
  }
}
