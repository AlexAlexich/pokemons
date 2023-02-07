/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CanleaveComponent } from './canleave.component';

describe('CanleaveComponent', () => {
  let component: CanleaveComponent;
  let fixture: ComponentFixture<CanleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
