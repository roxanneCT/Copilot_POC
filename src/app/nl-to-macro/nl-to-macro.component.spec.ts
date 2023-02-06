import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlToMacroComponent } from './nl-to-macro.component';

describe('NlToMacroComponent', () => {
  let component: NlToMacroComponent;
  let fixture: ComponentFixture<NlToMacroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlToMacroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlToMacroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
