import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroFlowComponent } from './macro-flow.component';

describe('MacroFlowComponent', () => {
  let component: MacroFlowComponent;
  let fixture: ComponentFixture<MacroFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacroFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
