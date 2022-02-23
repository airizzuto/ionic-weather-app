import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherInfoPageModule } from './weather-info/weather-info.module';
import { SearchbarComponent } from './weather-info/searchbar/searchbar.component';
import { CurrentWeatherComponent } from './weather-info/current-weather/current-weather.component';
import { UnitToggleComponent } from './header/unit-toggle/unit-toggle.component';
import { UnitState } from 'src/services/states/unit-state.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnitToggleComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    WeatherInfoPageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UnitState,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
