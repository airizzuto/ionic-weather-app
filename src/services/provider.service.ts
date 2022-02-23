import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  weatherService: WeatherService;

  constructor(
    weatherService: WeatherService
  ) {
    this.weatherService = weatherService;
  }

  weatherProvider() {
    return this.weatherService;
  }
}
