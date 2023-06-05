import { Component , OnInit } from '@angular/core';
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
      id: 1,
      picture: '../assets/images/pokeball.png',
      name: 'Salamèche',
      size: 0.6,
      evolution: 'Charmeleon',
      attack: ['Ember', 'Scratch', 'Tackle'],
      weakness: ['Water', 'Ground', 'Rock']
    },
    {
      id: 2,
      picture: '../assets/images/pokeball.png',
      name: 'Charmeleon',
      size: 1.1,
      evolution: 'Charizard',
      attack: ['Ember', 'Scratch', 'Tackle', 'Flamethrower'],
      weakness: ['Water', 'Ground', 'Rock']
    },
    {
      id: 3,
      picture: '../assets/images/pokeball.png',
      name: 'Charizard',
      size: 1.7,
      evolution: 'None',
      attack: ['Ember', 'Scratch', 'Tackle', 'Flamethrower', 'Fire Spin'],
      weakness: ['Water', 'Ground', 'Rock']
    },]

    selectedPokemon: Pokemon;
    selectPokemon(pokemon: Pokemon) {
      this.selectedPokemon = pokemon;
    }
}
