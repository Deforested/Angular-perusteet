import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-component',
  imports: [],
  templateUrl: './weather-component.component.html',
  styleUrl: './weather-component.component.css'
})
export class WeatherComponentComponent {
  title = 'Todays Weather';
  weather = 'Today is 15 degrees and its sunny'
}
