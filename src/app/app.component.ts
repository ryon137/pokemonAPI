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
      this.pokemon.hp = pokemon.stats[0].base_stat;
      this.pokemon.attack = pokemon.stats[1].base_stat;
      this.pokemon.defense = pokemon.stats[2].base_stat;
      this.pokemon.specialAttack = pokemon.stats[3].base_stat;
      this.pokemon.specialDefense = pokemon.stats[4].base_stat;
      this.pokemon.speed = pokemon.stats[5].base_stat;
      this.pokemon.type1 = pokemon.types[0].type.name;
      this.pokemon.type2 = pokemon.types[1].type.name;
      this.pokemon.move1 = pokemon.moves[10].move.name;
    });
  }

  getPokemon2() {
    this.pokemonService.getPokemon().subscribe((pokemon: any) => {
      this.pokemon2 = pokemon;
      this.pokemon2.hp = pokemon.stats[0].base_stat;
      this.pokemon2.attack = pokemon.stats[1].base_stat;
      this.pokemon2.defense = pokemon.stats[2].base_stat;
      this.pokemon2.specialAttack = pokemon.stats[3].base_stat;
      this.pokemon2.specialDefense = pokemon.stats[4].base_stat;
      this.pokemon2.speed = pokemon.stats[5].base_stat;
      this.pokemon2.type1 = pokemon.types[0].type.name;
      this.pokemon2.type2 = pokemon.types[1].type.name;
    });
  }

  battlePokemon(){
    if((this.pokemon.hp + this.pokemon.attack + this.pokemon.defense + this.pokemon.specialAttack + this.pokemon.specialDefense + this.pokemon.speed) > 
    (this.pokemon2.hp + this.pokemon2.attack+ this.pokemon2.defense + this.pokemon2.specialAttack + this.pokemon2.specialDefense + this.pokemon2.speed)){
      this.winner = this.pokemon.name;
      this.winner = this.winner.charAt(0).toUpperCase()+this.winner.slice(1);
      console.log(this.winner);
    }
    else if((this.pokemon.hp + this.pokemon.attack+ this.pokemon.defense + this.pokemon.specialAttack + this.pokemon.specialDefense + this.pokemon.speed) < 
    (this.pokemon2.hp + this.pokemon2.attack + this.pokemon2.defense + this.pokemon2.specialAttack + this.pokemon2.specialDefense + this.pokemon2.speed)){
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

