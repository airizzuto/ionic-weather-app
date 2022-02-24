import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { Unit } from 'src/models/Units';
import { CurrentWeatherV1 } from 'src/models/Weather';
import { ProviderService } from 'src/services/provider.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.page.html',
  styleUrls: ['./weather-info.page.scss'],
})
export class WeatherInfoPage implements OnInit {
  title = 'Current';
  currentWeather: CurrentWeatherV1 | undefined;
  unit: Unit = 'metric';
  location: string;

  constructor(
    private serviceProvider: ProviderService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.getCurrentCoordinates()
      .then(_ => {
        this.getCurrentWeather();
      }).catch(error => console.log(error));
  }

  toggleUnit(newUnit: Unit) {
    console.log('Unit toggle: ', newUnit);

    this.unit = newUnit;
  }

  searchLocationWeather(newLocation: string) {
    this.location = newLocation.trim();

    this.getCurrentWeather();
  }

  getCurrentWeather(): void {
    if (!this.location) { return; }

    this.serviceProvider
      .weatherProvider()
      .getCurrent(this.location, this.unit)
        .subscribe(weather => this.currentWeather = weather);
  }

  async requestPermissions() {
    const permResult = await Geolocation.requestPermissions();
    console.log('Permanent request result: ', permResult);
  }

  async getCurrentCoordinates(): Promise<void>{
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      console.log('Plugin geolocation not available');
      return;
    }

    await Geolocation.getCurrentPosition()
      .then(data => {
        this.location =  data.coords.latitude + ',' + data.coords.longitude;
        return;
    }).catch(err => {
      console.error(err);
    });
  }
}
