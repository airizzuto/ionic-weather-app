/* eslint-disable @typescript-eslint/naming-convention */

import { Url } from 'url';

interface Coordinates {
  lat: number;
  lon: number;
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

interface Description {
  text: string;
  icon: Url;
  code: number;
}

interface CurrentConditions {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Description;
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

export interface CurrentWeather {
  location: Location;
  current: CurrentConditions;
}
