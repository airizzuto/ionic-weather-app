import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/models/Weather';
import { MeteoService } from '../meteo.service';


@Component({
  selector: 'app-meteo-info',
  templateUrl: './meteo-info.component.html',
  styleUrls: ['./meteo-info.component.scss'],
})
export class MeteoInfoComponent implements OnInit {
  currentWeather: CurrentWeather | undefined;

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
    // capacitor get user location
  }

  getCurrentWeather(location): void {
    location = location.trim();
    if (!location) { return; }

    this.meteoService.getCurrentWeather(location)
      .subscribe(weather => this.currentWeather = weather);
  }
}
