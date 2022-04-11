import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IForecastResponse } from '@models//forecast-response/forecast-response.interface';
import { IWeatherResponse } from '@models//weather-card-response/weather-response.interface';

import { environment } from 'environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  // change any
  private currentConditions: any = [];
  constructor(private http: HttpClient) {}

  loadWeatherCard(zipcode: string): Observable<IWeatherResponse> {
    return this.http.get<IWeatherResponse>(
      `${environment.url}/weather?zip=${zipcode},us&units=imperial&APPID=${environment.appId}`
    );
  }

  removeWeatherCard(zipcode: string) {
    for (let i in this.currentConditions) {
      if (this.currentConditions[i].zip == zipcode)
        this.currentConditions.splice(+i, 1);
    }
  }

  getWeatherCards(): any[] {
    return this.currentConditions;
  }

  getForecast(zipcode: string): Observable<IForecastResponse> {
    return this.http.get<IForecastResponse>(
      `${environment.url}/forecast?zip=${zipcode},us&units=imperial&cnt=5&APPID=${environment.appId}`
    );
  }
  getIconsByUrl(iconName: string) {
    return `${environment.iconUrl}/weather/${iconName}`;
  }

  getIcons(id: number): string {
    switch (true) {
      case 200 <= id && id <= 531:
        return 'rain.png';
      case 600 <= id && id <= 622:
        return 'snow.png';
      case 801 <= id && id <= 804:
        return 'clouds.png';
      case id == 800:
        return 'sun.png';
      default:
        return 'sun.png';
    }
  }
}
