import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSimulationComponent } from './start-simulation.component';

describe('StartSimulationComponent', () => {
  let component: StartSimulationComponent;
  let fixture: ComponentFixture<StartSimulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartSimulationComponent]
    });
    fixture = TestBed.createComponent(StartSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
