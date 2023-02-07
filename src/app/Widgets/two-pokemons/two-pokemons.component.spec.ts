/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwoPokemonsComponent } from './two-pokemons.component';

describe('TwoPokemonsComponent', () => {
  let component: TwoPokemonsComponent;
  let fixture: ComponentFixture<TwoPokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
