import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPlantComponent } from './pokemon-plant.component';

describe('PokemonPlantComponent', () => {
  let component: PokemonPlantComponent;
  let fixture: ComponentFixture<PokemonPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonPlantComponent]
    });
    fixture = TestBed.createComponent(PokemonPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
