import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  title = "Todays Weather"
  weather = 'Today is -21 degrees and its sunny'
}
