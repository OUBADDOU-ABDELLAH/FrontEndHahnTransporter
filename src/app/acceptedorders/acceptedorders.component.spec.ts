import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedordersComponent } from './acceptedorders.component';

describe('AcceptedordersComponent', () => {
  let component: AcceptedordersComponent;
  let fixture: ComponentFixture<AcceptedordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptedordersComponent]
    });
    fixture = TestBed.createComponent(AcceptedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
