import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllHousesComponent } from './display-all-houses.component';

describe('DisplayAllHousesComponent', () => {
  let component: DisplayAllHousesComponent;
  let fixture: ComponentFixture<DisplayAllHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllHousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
