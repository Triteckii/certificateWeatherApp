import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { WeatherService } from "@services/weather/weather.service";
import { AddZipcode, ZipcodeActionTypes } from "@store/zipCode/zip-code.actions";
import { Observable, of } from "rxjs";
import { mergeMap, catchError, map } from "rxjs/operators";


import { WeatherLoaded, WeatherLoadFailed } from "./current-weather.actions";


@Injectable()
export class WeatherEffects {
  loadCurrentConditions$: Observable<any> = createEffect(() => {
    this.actions$.pipe(
        ofType(ZipcodeActionTypes.AddZipcode),
        mergeMap((action) =>
          this.weatherService.loadWeatherCard(action["zipcode"]).pipe(
            map((data) => new WeatherLoaded(action["zipcode"], data)),
            catchError((err) =>
              of(new WeatherLoadFailed(action["zipcode"], err))
            )
          )
        )
      );
  })


  constructor(
    private actions$: Actions<AddZipcode>,
    private weatherService: WeatherService
  ) {}
}
