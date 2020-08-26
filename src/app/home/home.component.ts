import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../shared/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.weatherService.getCurrentWeather();
  }

}
