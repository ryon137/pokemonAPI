import { Component } from '@angular/core';
import { PokemonModel } from './models/pokemon/pokemon.model';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon';
  pokemon!: PokemonModel;
  pokemon2!: PokemonModel;
  winner!: string;

  constructor(private pokemonService: PokemonService) {}

  getPokemon() {
    this.pokemonService.getPokemon().subscribe((pokemon: any) => {
      this.pokemon = pokemon;
      this.pokemon.baseStat = pokemon.stats[0].base_stat;
    });
  }

  getPokemon2() {
    this.pokemonService.getPokemon().subscribe((pokemon: any) => {
      this.pokemon2 = pokemon;
      this.pokemon2.baseStat = pokemon.stats[0].base_stat;
    });
  }

  battlePokemon(){
    if(this.pokemon.baseStat > this.pokemon2.baseStat){
      this.winner = this.pokemon.name;
      this.winner = this.winner.charAt(0).toUpperCase()+this.winner.slice(1);
      console.log(this.winner);
    }
    else if(this.pokemon.baseStat < this.pokemon2.baseStat){
      this.winner = this.pokemon2.name;
      this.winner = this.winner.charAt(0).toUpperCase()+this.winner.slice(1);
      console.log(this.winner);
    }
    else{
      this.winner = "Draw!";
      console.log(this.winner);
    }
  }
}

