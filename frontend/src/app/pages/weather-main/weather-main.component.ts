import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherService } from '@services/weather/weather.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss'],
})
export class WeatherMainComponent implements OnInit {
  icon: any;
  constructor(private service: WeatherService) {}

  ngOnInit(): void {}

  addZipLocation(zipcode: string) {
    console.log(99, zipcode);
    this.service.loadWeatherCard(zipcode).subscribe((res) => {
      this.icon = this.service.getIconsByUrl(
        this.service.getIcons(res.weather[0].id)
      );
    });
    // this.store.dispatch(new AddZipcode(zipcode));
  }
}
