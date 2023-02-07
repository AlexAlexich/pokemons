export class Pokemons {
  name: string;
  url: string;
}

export class Pokemon {
  id: string;
  name: string;
  photo: string;
  pokeAbility: string;
}
export class PokemonAbility {
  pokeAbility: string;
}
export class PokemonGet {
  id: string;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}
export class getPokemonAbility {
  effect_entries: [{
    effect: string
  }, {
    effect: string
  }]
}
