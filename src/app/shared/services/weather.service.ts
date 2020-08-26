import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherEndpointService} from './http/weather-endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient,
              private weatherEndpoint: WeatherEndpointService) { }

  public getCurrentWeather(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          const pos = {
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString()
          };
          this.weatherEndpoint.getCurrentWeather(pos).subscribe((res) => {
            console.log(res);
          });
        }
      );
    } else {
      console.log('ERROR: Not supported by browser');
    }
  }
}
