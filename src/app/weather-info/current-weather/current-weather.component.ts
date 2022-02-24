import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'src/models/Units';
import { CurrentWeatherV1 } from 'src/models/Weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input() weather: CurrentWeatherV1;
  @Input() unit: Unit;

  constructor() { }

  ngOnInit() {}

}
