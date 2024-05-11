import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalControllerComponent } from './signal-controller.component';

describe('SignalControllerComponent', () => {
  let component: SignalControllerComponent;
  let fixture: ComponentFixture<SignalControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
