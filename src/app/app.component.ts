import { Component, OnInit } from '@angular/core';
import { Pokemons } from './Models/Pokemon';
import { ApiService } from './Services/api.service';
import { ConstService } from './Services/const.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pokemons';
  pickerLink = ConstService.pokemonpicker;
  reloadLink = ConstService.pokemonReloader;
  guardLink = ConstService.canLeave;
  twoPokemons = ConstService.twoPokemons;
  constructor() {}
  ngOnInit(): void {
    console.log('ddsc');
  }
}
