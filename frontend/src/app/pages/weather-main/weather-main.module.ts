import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherMainRoutingModule } from './weather-main-routing.module';
import { WeatherMainComponent } from './weather-main.component';
import { SearchModule } from '@components/search/search.module';
import { WeatherCardModule } from '@components/weather-card/weather-card.module';

@NgModule({
  declarations: [WeatherMainComponent],
  imports: [
    CommonModule,
    WeatherMainRoutingModule,
    SearchModule,
    WeatherCardModule
  ],
  exports:[
    WeatherMainComponent
  ]
})
export class WeatherMainModule { }
