import { Component, NgZone, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { Unit } from 'src/models/Units';
import { CurrentWeather } from 'src/models/Weather';
import { ProviderService } from 'src/services/provider.service';
import { UnitState } from 'src/services/states/unit-state.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.page.html',
  styleUrls: ['./weather-info.page.scss'],
})
export class WeatherInfoPage implements OnInit {
  currentWeather: CurrentWeather | undefined;
  unit: Unit = 'metric';
  location: string;

  constructor(
    public unitState: UnitState,
    private serviceProvider: ProviderService,
    private zone: NgZone
  ) {
    this.unit = unitState.state;
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
      .getCurrentWeather(this.location, this.unit)
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
