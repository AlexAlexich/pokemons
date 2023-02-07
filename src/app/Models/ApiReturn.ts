import { Pokemons } from "./Pokemon";

export class ApiReturn<T>{
  count: number;
  next: Array<T> | null;
  previous: Array<T> | null;
  results: Array<T>
}
