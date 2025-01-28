import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import { WeatherComponent2Component } from './weather-component2/weather-component2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherComponentComponent, WeatherComponent2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Fundamentals of Angular.js (nonstop, 3 ects)';
  introduction =
    'My name is Teemu Yritys and i am 28 years old engineering student from Oulu';
  yesterdayWeather = '20 degrees and cloudy';
}
