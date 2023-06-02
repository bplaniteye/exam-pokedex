import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonFireComponent } from './pokemon-fire/pokemon-fire.component';
import { PokemonThunderComponent } from './pokemon-thunder/pokemon-thunder.component';
import { PokemonPlantComponent } from './pokemon-plant/pokemon-plant.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonFireComponent,
    PokemonThunderComponent,
    PokemonPlantComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
