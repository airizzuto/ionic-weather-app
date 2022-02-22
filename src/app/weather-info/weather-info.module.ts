import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherInfoPageRoutingModule } from './weather-info-routing.module';

import { WeatherInfoPage } from './weather-info.page';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherInfoPageRoutingModule
  ],
  declarations: [WeatherInfoPage, CurrentWeatherComponent, SearchbarComponent]
})
export class WeatherInfoPageModule {}
