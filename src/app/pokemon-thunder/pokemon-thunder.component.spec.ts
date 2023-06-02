import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonThunderComponent } from './pokemon-thunder.component';

describe('PokemonThunderComponent', () => {
  let component: PokemonThunderComponent;
  let fixture: ComponentFixture<PokemonThunderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonThunderComponent]
    });
    fixture = TestBed.createComponent(PokemonThunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
