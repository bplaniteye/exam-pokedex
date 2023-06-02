import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonFireComponent } from './pokemon-fire/pokemon-fire.component';
import { PokemonThunderComponent } from './pokemon-thunder/pokemon-thunder.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonFireComponent,
    PokemonThunderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
