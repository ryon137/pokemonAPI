import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PokemonModel } from '../models/pokemon/pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonId!: number;
  endpoint: string = `https://pokeapi.co/api/v2/pokemon`;
  pokemonObject!: object;

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<PokemonModel> {
    this.pokemonId = Math.ceil(Math.random() * (151-1) + 1);
    return this.http.get<PokemonModel>(`${this.endpoint}/${this.pokemonId}`).pipe(map((res) => res));
  }
}
