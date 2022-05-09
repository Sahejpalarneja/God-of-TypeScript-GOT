import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllCharactersComponent } from './display-all-characters.component';

describe('DisplayAllCharactersComponent', () => {
  let component: DisplayAllCharactersComponent;
  let fixture: ComponentFixture<DisplayAllCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
