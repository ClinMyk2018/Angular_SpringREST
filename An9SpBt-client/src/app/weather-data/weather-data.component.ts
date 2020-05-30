import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import { SelectedlocationComponent } from "../selectedlocation/selectedlocation.component";
import { UserSavedLocations } from "../UserSavedLocations";
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

  locLat= "29";
  locLon= "-98";

  constructor(private http: HttpClient ) { }
  
  weatherData: Object
  currentTimeDayOne: any
  todaysSummaryDayOne: any
  temperatureValDayOne: any
  temperatureUnitDayOne: any
  humidityValDayOne: any 
  humidityUnitDayOne: any 
  visibilityValDayOne: any
  visibilityUnitDayOne: any
  pressureValDayOne: any 
  pressureUnitDayOne: any 
  windBearingValDayOne: any
  windBearingUnitDayOne: any
  windSpeedValDayOne: any
  windSpeedUnitDayOne: any

  currentTimeDayTwo: any
  todaysSummaryDayTwo: any
  temperatureValDayTwo: any
  temperatureUnitDayTwo: any
  humidityValDayTwo: any 
  humidityUnitDayTwo: any 
  visibilityValDayTwo: any
  visibilityUnitDayTwo: any
  pressureValDayTwo: any 
  pressureUnitDayTwo: any 
  windBearingValDayTwo: any
  windBearingUnitDayTwo: any
  windSpeedValDayTwo: any
  windSpeedUnitDayTwo: any

  currentTimeDayThree: any
  todaysSummaryDayThree: any
  temperatureValDayThree: any
  temperatureUnitDayThree: any
  humidityValDayThree: any 
  humidityUnitDayThree: any 
  visibilityValDayThree: any
  visibilityUnitDayThree: any
  pressureValDayThree: any 
  pressureUnitDayThree: any 
  windBearingValDayThree: any
  windBearingUnitDayThree: any
  windSpeedValDayThree: any
  windSpeedUnitDayThree: any

  currentTimeDayFour: any
  todaysSummaryDayFour: any
  temperatureValDayFour: any
  temperatureUnitDayFour: any
  humidityValDayFour: any 
  humidityUnitDayFour: any 
  visibilityValDayFour: any
  visibilityUnitDayFour: any
  pressureValDayFour: any 
  pressureUnitDayFour: any 
  windBearingValDayFour: any
  windBearingUnitDayFour: any
  windSpeedValDayFour: any
  windSpeedUnitDayFour: any

  currentTimeDayFive: any
  todaysSummaryDayFive: any
  temperatureValDayFive: any
  temperatureUnitDayFive: any
  humidityValDayFive: any 
  humidityUnitDayFive: any 
  visibilityValDayFive: any
  visibilityUnitDayFive: any
  pressureValDayFive: any 
  pressureUnitDayFive: any 
  windBearingValDayFive: any
  windBearingUnitDayFive: any
  windSpeedValDayFive: any
  windSpeedUnitDayFive: any

  
  // currentTime : any
  // todaysSummary: any
  // temperatureVal: any
  // temperatureUnit: any
  // dewPointVal: any 
  // dewPointUnit: any 
  // humidityVal: any 
  // humidityUnit: any 
  // visibilityVal: any
  // visibilityUnit: any
  // pressureVal: any 
  // pressureUnit: any 
  // windBearingVal: any
  // windBearingUnit: any
  // windSpeedVal: any
  // windSpeedUnit: any
  // windGustVal: any
  // windGustUnit: any
  
  ngOnInit(): void {

    this.loadWeatherData();

  }

  loadWeatherData() {
    
    const apiKey = environment.climacell.accessToken;
    this.http.get('https://api.climacell.co/v3/weather/forecast/daily?' +
    'lat=' + this.locLat + '&lon='+this.locLon +
    '&unit_system=us&start_time=now&'+
    'fields=precipitation%2Cprecipitation_accumulation%2Ctemp%2Cfeels_like%2Cwind_speed%2Cbaro_pressure%2Cvisibility%2Chumidity%2Cwind_direction%2Csunrise%2Csunset%2Cmoon_phase%2Cweather_code'+
    '&apikey=' + apiKey)
    .subscribe(data => {
      // THIS GETS THE WHOLE OBJECT FOR USE
      this.weatherData = data;
      let dayOneForecast = this.weatherData[0];
      let dayTwoForecast = this.weatherData[1];
      let dayThreeForecast = this.weatherData[2];
      let dayFourForecast = this.weatherData[3];
      let dayFiveForecast = this.weatherData[4];

      this.currentTimeDayOne = dayOneForecast.observation_time.value;
      this.todaysSummaryDayOne = dayOneForecast.weather_code.value; 
      this.temperatureValDayOne = Math.round(dayOneForecast.temp[0].min.value);
      this.temperatureUnitDayOne = dayOneForecast.temp[0].min.units;
      this.humidityValDayOne = Math.round(dayOneForecast.humidity[0].min.value);
      this.humidityUnitDayOne = dayOneForecast.humidity[0].min.units;
      this.visibilityValDayOne = Math.round(dayOneForecast.visibility[0].min.value);
      this.visibilityUnitDayOne = dayOneForecast.visibility[0].min.units;
      this.pressureValDayOne = dayOneForecast.baro_pressure[0].min.value;
      this.pressureUnitDayOne = dayOneForecast.baro_pressure[0].min.units;
      this.windBearingValDayOne = Math.round(dayOneForecast.wind_direction[0].min.value);
      this.windBearingUnitDayOne = dayOneForecast.wind_direction[0].min.units;
      this.windSpeedValDayOne = Math.round(dayOneForecast.wind_speed[0].min.value);
      this.windSpeedUnitDayOne = dayOneForecast.wind_speed[0].min.units;
      
      this.currentTimeDayTwo = dayTwoForecast.observation_time.value;
      this.todaysSummaryDayTwo = dayTwoForecast.weather_code.value; 
      this.temperatureValDayTwo = Math.round(dayTwoForecast.temp[0].min.value);
      this.temperatureUnitDayTwo = dayTwoForecast.temp[0].min.units;
      this.humidityValDayTwo = Math.round(dayTwoForecast.humidity[0].min.value);
      this.humidityUnitDayTwo = dayTwoForecast.humidity[0].min.units;
      this.visibilityValDayTwo = Math.round(dayTwoForecast.visibility[0].min.value);
      this.visibilityUnitDayTwo = dayTwoForecast.visibility[0].min.units;
      this.pressureValDayTwo = dayTwoForecast.baro_pressure[0].min.value;
      this.pressureUnitDayTwo = dayTwoForecast.baro_pressure[0].min.units;
      this.windBearingValDayTwo = Math.round(dayTwoForecast.wind_direction[0].min.value);
      this.windBearingUnitDayTwo = dayTwoForecast.wind_direction[0].min.units;
      this.windSpeedValDayTwo = Math.round(dayTwoForecast.wind_speed[0].min.value);
      this.windSpeedUnitDayTwo = dayTwoForecast.wind_speed[0].min.units;
      
      this.currentTimeDayThree = dayThreeForecast.observation_time.value;
      this.todaysSummaryDayThree = dayThreeForecast.weather_code.value; 
      this.temperatureValDayThree = Math.round(dayThreeForecast.temp[0].min.value);
      this.temperatureUnitDayThree = dayThreeForecast.temp[0].min.units;
      this.humidityValDayThree = Math.round(dayThreeForecast.humidity[0].min.value);
      this.humidityUnitDayThree = dayThreeForecast.humidity[0].min.units;
      this.visibilityValDayThree = Math.round(dayThreeForecast.visibility[0].min.value);
      this.visibilityUnitDayThree = dayThreeForecast.visibility[0].min.units;
      this.pressureValDayThree = dayThreeForecast.baro_pressure[0].min.value;
      this.pressureUnitDayThree = dayThreeForecast.baro_pressure[0].min.units;
      this.windBearingValDayThree = Math.round(dayThreeForecast.wind_direction[0].min.value);
      this.windBearingUnitDayThree = dayThreeForecast.wind_direction[0].min.units;
      this.windSpeedValDayThree = Math.round(dayThreeForecast.wind_speed[0].min.value);
      this.windSpeedUnitDayThree = dayThreeForecast.wind_speed[0].min.units;
      
      this.currentTimeDayFour = dayFourForecast.observation_time.value;
      this.todaysSummaryDayFour = dayFourForecast.weather_code.value; 
      this.temperatureValDayFour = Math.round(dayFourForecast.temp[0].min.value);
      this.temperatureUnitDayFour = dayFourForecast.temp[0].min.units;
      this.humidityValDayFour = Math.round(dayFourForecast.humidity[0].min.value);
      this.humidityUnitDayFour = dayFourForecast.humidity[0].min.units;
      this.visibilityValDayFour = Math.round(dayFourForecast.visibility[0].min.value);
      this.visibilityUnitDayFour = dayFourForecast.visibility[0].min.units;
      this.pressureValDayFour = dayFourForecast.baro_pressure[0].min.value;
      this.pressureUnitDayFour = dayFourForecast.baro_pressure[0].min.units;
      this.windBearingValDayFour = Math.round(dayFourForecast.wind_direction[0].min.value);
      this.windBearingUnitDayFour = dayFourForecast.wind_direction[0].min.units;
      this.windSpeedValDayFour = Math.round(dayFourForecast.wind_speed[0].min.value);
      this.windSpeedUnitDayFour = dayFourForecast.wind_speed[0].min.units;
      
      this.currentTimeDayFive = dayFiveForecast.observation_time.value;
      this.todaysSummaryDayFive = dayFiveForecast.weather_code.value; 
      this.temperatureValDayFive = Math.round(dayFiveForecast.temp[0].min.value);
      this.temperatureUnitDayFive = dayFiveForecast.temp[0].min.units;
      this.humidityValDayFive = Math.round(dayFiveForecast.humidity[0].min.value);
      this.humidityUnitDayFive = dayFiveForecast.humidity[0].min.units;
      this.visibilityValDayFive = Math.round(dayFiveForecast.visibility[0].min.value);
      this.visibilityUnitDayFive = dayFiveForecast.visibility[0].min.units;
      this.pressureValDayFive = dayFiveForecast.baro_pressure[0].min.value;
      this.pressureUnitDayFive = dayFiveForecast.baro_pressure[0].min.units;
      this.windBearingValDayFive = Math.round(dayFiveForecast.wind_direction[0].min.value);
      this.windBearingUnitDayFive = dayFiveForecast.wind_direction[0].min.units;
      this.windSpeedValDayFive = Math.round(dayFiveForecast.wind_speed[0].min.value);
      this.windSpeedUnitDayFive = dayFiveForecast.wind_speed[0].min.units;

      })
      

      // THIS IS FOR HOURLY WEATHER UP TO 360 hours
    this.http.get('https://api.climacell.co/v3/weather/nowcast?' +
    'lat=29.424&lon=-98.493&unit_system=us&' +
    'timestep=60&start_time=now&'+
    'fields=precipitation%2Cprecipitation_type%2Ctemp%2Cfeels_like%2Cdewpoint%2Cwind_speed%2Cwind_gust%2Cbaro_pressure%2Cvisibility%2Chumidity%2Cwind_direction%2Csunrise%2Csunset%2Ccloud_cover%2Ccloud_ceiling%2Ccloud_base%2Csurface_shortwave_radiation%2Cweather_code'+
    '&apikey=' + apiKey)
    .subscribe(data => {
      // THIS GETS THE WHOLE OBJECT FOR USE
      this.weatherData = data;
      let hourOneForecast = this.weatherData[0]
      let hourTwoForecast = this.weatherData[1]
      let hourThreeForecast = this.weatherData[2]
      console.log(hourOneForecast);
      console.log(hourTwoForecast);
      console.log(hourThreeForecast);

    //   this.currentTime = hourOneForecast.observation_time.value;
    //   this.todaysSummary = hourOneForecast.weather_code.value;
    //   this.temperatureVal = Math.round(hourOneForecast.temp.value);
    //   this.temperatureUnit = hourOneForecast.temp.units;
    //   this.dewPointVal = Math.round(hourOneForecast.dewpoint.value);
    //   this.dewPointUnit = hourOneForecast.dewpoint.units;
    //   this.humidityVal = Math.round(hourOneForecast.humidity.value);
    //   this.humidityUnit = hourOneForecast.humidity.units;
    //   this.visibilityVal = Math.round(hourOneForecast.visibility.value);
    //   this.visibilityUnit = hourOneForecast.visibility.units;
    //   this.pressureVal = hourOneForecast.baro_pressure.value;
    //   this.pressureUnit = hourOneForecast.baro_pressure.units;
    //   this.windBearingVal = Math.round(hourOneForecast.wind_direction.value);
    //   this.windBearingUnit = hourOneForecast.wind_direction.units;
    //   this.windSpeedVal = Math.round(hourOneForecast.wind_speed.value);
    //   this.windSpeedUnit = hourOneForecast.wind_speed.units;
    //   this.windGustVal = Math.round(hourOneForecast.wind_gust.value);
    //   this.windGustUnit = hourOneForecast.wind_gust.units;
  })

  }

}
