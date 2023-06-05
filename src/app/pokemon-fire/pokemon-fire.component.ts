import { Component, OnInit } from '@angular/core';
import Pokemon from '../types/pokemon.type';

@Component({
  selector: 'app-pokemon-fire',
  templateUrl: './pokemon-fire.component.html',
  styleUrls: ['./pokemon-fire.component.css']
})

export class PokemonFireComponent implements OnInit {
  title = 'Pokemon de type feu';
  constructor() {
  }

  ngOnInit() {
  }

  pokemonFire: Pokemon[] = [
    {
      id: 4,
      picture: '../assets/images/salameche.png',
      name: 'Salamèche',
      size: 0.6,
      evolution: 'Reptincel',
      attack: ['Brasier', 'Griffures', 'Plaquage'],
      weakness: ['Eau', 'Sol', 'Roche']
    },
    {
      id: 5,
      picture: '../assets/images/reptincel.png',
      name: 'Reptincel',
      size: 1.1,
      evolution: 'Dracaufeu',
      attack: ['Brasier', 'Griffures', 'Plaquage', 'Lance flammes'],
      weakness: ['Eau', 'Sol', 'Roche']
    },
    {
      id: 6,
      picture: '../assets/images/dracaufeu.jpg',
      name: 'Dracaufeu',
      size: 1.7,
      evolution: '---',
      attack: ['Brasier', 'Griffures', 'Plaquage', 'Lance flammes', 'Tourbillon de feu'],
      weakness: ['Eau', 'Sol', 'Roche']
    },]

  selectedPokemon: Pokemon;
  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}
