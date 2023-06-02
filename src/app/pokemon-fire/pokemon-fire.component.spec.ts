import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFireComponent } from './pokemon-fire.component';

describe('PokemonFireComponent', () => {
  let component: PokemonFireComponent;
  let fixture: ComponentFixture<PokemonFireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFireComponent]
    });
    fixture = TestBed.createComponent(PokemonFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
