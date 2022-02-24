import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CurrentWeatherV1, CurrentWeatherV2 } from 'src/models/Weather';
import { Unit } from 'src/models/Units';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private API_BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${environment.WEATHER_API_KEY}`;

  constructor(private http: HttpClient) { }

  getCurrentWeather(location: string, unit?: Unit): Observable<CurrentWeatherV1> {
    const locationQuery = `&q=${location}`;

    const url = this.API_BASE_URL + locationQuery + `&aqi=no`;

    return this.http.get<CurrentWeatherV1>(url);
  }

  getCurrentWeatherV2(location: string, unit?: Unit): Observable<CurrentWeatherV2> {
    const locationQuery = `&q=${location}`;
    const unitQuery = `&units=${unit}`;

    const url = this.API_BASE_URL + locationQuery + `&aqi=no` + unitQuery;

    return this.http.get<CurrentWeatherV2>(url);
  }
}
