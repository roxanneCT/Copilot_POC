import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroCardComponent } from './macro-card.component';

describe('MacroCardComponent', () => {
  let component: MacroCardComponent;
  let fixture: ComponentFixture<MacroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
