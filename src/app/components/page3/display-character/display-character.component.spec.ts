import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCharacterComponent } from './display-character.component';

describe('DisplayCharacterComponent', () => {
  let component: DisplayCharacterComponent;
  let fixture: ComponentFixture<DisplayCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
