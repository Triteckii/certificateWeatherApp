import { IWeatherResponse } from '@models//weather-card-response/weather-response.interface';
import { Action } from '@ngrx/store';

export enum WeatherActionTypes {
  Loaded = '[CurrentWeather] Weather Loaded',
  LoadFailed = '[CurrentWeather] Weather Load Failded',
}

export class WeatherLoaded implements Action {
  readonly type = WeatherActionTypes.Loaded;
  constructor(public zipcode: string, public conditions: IWeatherResponse) {}
}

export class WeatherLoadFailed implements Action {
  readonly type = WeatherActionTypes.LoadFailed;

  constructor(public zipcode: string, public error: string) {}
}

export type WeatherActions = WeatherLoaded | WeatherLoadFailed;
