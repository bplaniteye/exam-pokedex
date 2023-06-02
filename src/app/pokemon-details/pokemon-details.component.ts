import { Component , OnInit , Input } from '@angular/core';
import Pokemon from '../types/pokemon.type';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit{

  constructor() { }
  ngOnInit() {
  }
  @Input() pokemon : Pokemon;
}
