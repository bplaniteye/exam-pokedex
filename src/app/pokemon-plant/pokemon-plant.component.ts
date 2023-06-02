import { Component , OnInit} from '@angular/core';
import Pokemon from '../types/pokemon.type';
@Component({
  selector: 'app-pokemon-plant',
  templateUrl: './pokemon-plant.component.html',
  styleUrls: ['./pokemon-plant.component.css']
})
export class PokemonPlantComponent implements OnInit {

    title = 'Pokemon de type plante';

  constructor() { }
    ngOnInit() {
        
    }
    pokemonPlant: Pokemon[] = [
        {
            id: 1,  
            name: 'Bulbizarre',
            size: 0.7,
            evolution: 'Herbizarre',
            attack: ['Vine Whip', 'Tackle', 'Razor Leaf'],
            weakness: ['Fire', 'Ice', 'Flying', 'Psychic']
        },
        {
            id: 2,
            name: 'Herbizarre',
            size: 1,
            evolution: 'Florizarre',
            attack: ['Vine Whip', 'Tackle', 'Razor Leaf', 'Solar Beam'],
            weakness: ['Fire', 'Ice', 'Flying', 'Psychic']
        },
        {
            id: 3,
            name: 'Florizarre',
            size: 2,
            evolution: 'None',
            attack: ['Vine Whip', 'Tackle', 'Razor Leaf', 'Solar Beam', 'Petal Dance'],
            weakness: ['Fire', 'Ice', 'Flying', 'Psychic']
        },
    ]

    selectedPokemon: Pokemon;
    selectPokemon(pokemon: Pokemon) {
      this.selectedPokemon = pokemon;
    }

}
