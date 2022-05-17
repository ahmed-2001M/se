import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sensor2Component } from './sensor2.component';

describe('Sensor2Component', () => {
  let component: Sensor2Component;
  let fixture: ComponentFixture<Sensor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sensor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sensor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
