import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/models/Weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input() currentWeather: CurrentWeather;

  constructor() { }

  ngOnInit() {}

}
