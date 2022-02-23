import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CurrentWeather } from 'src/models/Weather';

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

  getCurrentWeather(location: string): Observable<CurrentWeather> {
    const url = this.API_BASE_URL + `&q=${location}&aqi=no`;
    return this.http.get<CurrentWeather>(url);
  }
}
