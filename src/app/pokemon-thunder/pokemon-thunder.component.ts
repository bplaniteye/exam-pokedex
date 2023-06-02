import { Component , OnInit } from '@angular/core';
import Pokemon from '../types/pokemon.type';
@Component({
  selector: 'app-pokemon-thunder',
  templateUrl: './pokemon-thunder.component.html',
  styleUrls: ['./pokemon-thunder.component.css']
})
export class PokemonThunderComponent implements OnInit {
constructor() { }
  ngOnInit() {
  }

pokemonThunder: Pokemon[] = [
    {
      id: 1,
      name: 'Pikachu',
      size: 0.4,
      evolution: 'Raichu',
      attack: ['Thunder Shock', 'Quick Attack', 'Electro Ball'],
      weakness: ['Ground']
    },
    {
      id: 2,
      name: 'Raichu',
      size: 0.8,
      evolution: 'None',
      attack: ['Thunder Shock', 'Quick Attack', 'Electro Ball', 'Thunderbolt'],
      weakness: ['Ground']
    },
    {
      id: 3,
      name: 'Voltali',
      size: 0.8,
      evolution: 'None',
      attack: ['Thunder Shock', 'Quick Attack', 'Electro Ball', 'Thunderbolt', 'Thunder'],
      weakness: ['Ground']
    },
  ]
  

}
