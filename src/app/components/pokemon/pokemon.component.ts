import { Component, Input, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  @Input() pokemon!: PokemonModel;

  constructor() { }

}

