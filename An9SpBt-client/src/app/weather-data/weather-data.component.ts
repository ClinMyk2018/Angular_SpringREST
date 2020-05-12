import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { UiMapComponent } from '../ui-map/ui-map.component';
import { MapWeatherServiceService } from '../mapWeatherService.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {

  // message: string;
  lat: string;
  long: string;

  constructor(private data: MapWeatherServiceService, private http: HttpClient ) { 
      
      // Trying this instead to see if it works...and so far it does!  \\
      this.data.currentMessageLat.subscribe((lat) => {
        this.lat = lat;
      });
      console.log(this.lat);
      this.data.currentMessageLong.subscribe((long) => {
        this.long = long;
      });
      console.log(this.long);
  }
  
  weatherData : Object
  current: any
  currentTime: any
  todaysSummary: any
  temperature: any
  dewPoint: any 
  humidity: any 
  visibility: any
  pressure: any 
  windBearing: any
  windSpeed: any
  windGust: any
  
  ngOnInit(): void {

                  // --> This for sure works!!! <-- \\
      // this.data.currentMessageLat.subscribe(lat => this.lat = lat);
      // console.log(this.lat);
      // this.data.currentMessageLong.subscribe(long => this.long = long);
      // console.log(this.long);

      // Must come after the call to service or data wont be called first!
      this.loadWeatherData();

  }

  loadWeatherData() {

    const apiKey = environment.darksky.accessToken;
    this.http.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + 
    apiKey + '/' + this.lat + ',' + this.long +'?units=si').subscribe(data => {
      // THIS GETS THE WHOLE OBJECT FOR USE
      this.weatherData = data;
      console.log(this.weatherData);
      
      //  --> WORKAROUND IS TO CREATE AN INTERFACE OBJECT MODEL TO HELP IDENTIFY ITS PROPERTIES
      this.current = (<any>data).currently;
      
      // Current Time/Day at Request 
      this.currentTime = new Date((<any>data).currently.time * 1000);
      
      // Needed for current day
      this.todaysSummary = this.current.summary;
      this.temperature = this.current.temperature;
      this.dewPoint = this.current.dewPoint;
      this.humidity = this.current.humidity;
      this.visibility = this.current.visibility;
      this.pressure = this.current.pressure;
      this.windBearing = this.current.windBearing;
      this.windSpeed = this.current.windSpeed;
      this.windGust = this.current.windGust;

    })
  }

}
