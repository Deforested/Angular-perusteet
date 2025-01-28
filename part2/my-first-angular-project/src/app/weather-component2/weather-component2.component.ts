import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-component2',
  imports: [],
  templateUrl: './weather-component2.component.html',
  styleUrl: './weather-component2.component.css',
})
export class WeatherComponent2Component {
  @Input() data: string = '';
}
