import { Component, OnInit, NgZone } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';

import { CurrentWeather } from 'src/models/Weather';
import { MeteoService } from '../meteo.service';


@Component({
  selector: 'app-meteo-info',
  templateUrl: './meteo-info.component.html',
  styleUrls: ['./meteo-info.component.scss'],
})
export class MeteoInfoComponent implements OnInit {
  currentWeather: CurrentWeather | undefined;
  location: string;

  constructor(
    private meteoService: MeteoService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.getCurrentCoordinates()
      .then(_ => {
        this.getCurrentWeather();
      }).catch(error => console.log(error));
  }

  getCurrentWeather(): void {
    const location = this.location.trim();
    if (!location) { return; }

    this.meteoService.getCurrentWeather(location)
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
