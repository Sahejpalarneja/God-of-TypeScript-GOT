import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteritemComponent } from './characteritem.component';

describe('CharacteritemComponent', () => {
  let component: CharacteritemComponent;
  let fixture: ComponentFixture<CharacteritemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteritemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
