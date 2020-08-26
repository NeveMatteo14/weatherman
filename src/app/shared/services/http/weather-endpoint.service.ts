import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherEndpointService {
  private baseUrl = 'http://localhost:3000/weather';

  constructor(private http: HttpClient) {
  }

  public getCurrentWeather(pos: {latitude: string, longitude: string}): Observable<any> {
    return this.http.get(this.baseUrl, {
      params: {lat: pos.latitude, lon: pos.longitude}
    });
  }
}
