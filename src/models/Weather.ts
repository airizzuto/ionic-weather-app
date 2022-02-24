/* eslint-disable @typescript-eslint/naming-convention */

import { Coordinates } from './Geolocation';

interface MainConditions {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level?: number;
  grnd_level?: number;
}

interface Visibility {
  visibility: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

interface Clouds {
  all: number;
}

interface Rain {
  '1h': number;
  '3h': number;
}

interface UnixTime {
  dt: Date;
}

interface InternalParameters {
  type?: number;
  id?: number;
  message?: number;
  country: string;
  sunrise: Date;
  sunset: Date;
}

interface Info {
  base: string;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface DescriptionV2 {
  id: number;
  main: string;
  icon: string;
  description: string;
}

interface DescriptionV1 {
  text: string;
  icon: string;
  code: number;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: Date;
  localtime: string;
}

interface CurrentConditions {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: DescriptionV1;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export class CurrentWeatherV1 {
  constructor(
    public location: Location,
    public current: CurrentConditions
  ) { }

}

export class CurrentWeatherV2 {
  constructor(
    public coord: Coordinates,
    public weather: DescriptionV1,
    public main: MainConditions,
    public visibility: Visibility,
    public wind: Wind,
    public clouds: Clouds,
    public rain: Rain,
    public dt: UnixTime,
    public sys: InternalParameters,
    public info: Info,
  ) { }
}
