import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent2Component } from './weather-component2.component';

describe('WeatherComponent2Component', () => {
  let component: WeatherComponent2Component;
  let fixture: ComponentFixture<WeatherComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
