/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokemonsViewComponent } from './pokemons-view.component';

describe('PokemonsViewComponent', () => {
  let component: PokemonsViewComponent;
  let fixture: ComponentFixture<PokemonsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
