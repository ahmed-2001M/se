import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sensor3Component } from './sensor3.component';

describe('Sensor3Component', () => {
  let component: Sensor3Component;
  let fixture: ComponentFixture<Sensor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sensor3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sensor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
