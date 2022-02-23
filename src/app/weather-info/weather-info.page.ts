import { Component, NgZone, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { CurrentWeather } from 'src/models/Weather';
import { ProviderService } from 'src/services/provider.service';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.page.html',
  styleUrls: ['./weather-info.page.scss'],
})
export class WeatherInfoPage implements OnInit {
  currentWeather: CurrentWeather | undefined;
  location: string;

  constructor(
    private serviceProvider: ProviderService,
    private zone: NgZone
  ) {
  }

  ngOnInit() {
    this.getCurrentCoordinates()
      .then(_ => {
        this.getCurrentWeather();
      }).catch(error => console.log(error));
  }

  searchWeather(newLocation: string) {
    this.location = newLocation.trim();

    this.getCurrentWeather();
  }

  getCurrentWeather(): void {
    if (!this.location) { return; }

    this.serviceProvider
      .weatherProvider()
      .getCurrentWeather(this.location)
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
