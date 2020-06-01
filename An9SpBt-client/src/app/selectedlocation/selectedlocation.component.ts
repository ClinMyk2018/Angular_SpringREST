import { Component, OnInit, Input } from "@angular/core";
import { UserSavedLocations } from "../UserSavedLocations";
import { environment } from "../../environments/environment";
import { WeatherDataComponent } from "../weather-data/weather-data.component";
import { ActivatedRoute, Router } from "@angular/router";
import { UserSavedLocationsService } from "../user-saved-locations.service";
import { AllLocationsComponent } from "../all-locations/all-locations.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-selectedlocation",
  templateUrl: "./selectedlocation.component.html",
  styleUrls: ["./selectedlocation.component.css"],
})
export class SelectedlocationComponent implements OnInit {
  locationId: number;
  location: UserSavedLocations;
  apiKey: any;
  locationLat: any;
  locationLong: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private locationService: UserSavedLocationsService
  ) {}

  weatherDataNow: any;
  currentTimeNow: any;
  todaysSummaryNow: any;

  temperatureValNow: any;
  temperatureUnitNow: any;
  dewpointValNow: any;
  dewpointUnitNow: any;
  feelslikeValNow: any;
  feelslikeUnitNow: any;
  humidityValNow: any;
  humidityUnitNow: any;

  visibilityValNow: any;
  visibilityUnitNow: any;

  windBearingValNow: any;
  windBearingUnitNow: any;
  windSpeedValNow: any;
  windSpeedUnitNow: any;
  gustValNow: any;
  gustUnitNow: any;

  pressureValNow: any;
  pressureUnitNow: any;

  precipValNow: any;
  precipUnitNow: any;
  preciptypeValNow: any;

  cloudcoverValNow: any;
  cloudcoverUnitNow: any;
  cloudbaseValNow: any;
  cloudbaseUnitNow: any;
  
  sunriseValNow: any;
  sunsetValNow: any;
  moonphaseValNow: any;

  ngOnInit() {
    this.apiKey = environment.climacell.accessToken;

    this.location = new UserSavedLocations();

    this.locationId = this.route.snapshot.params["locationId"];

    this.locationService.getLocation(this.locationId).subscribe(
      (data) => {
        console.log(data);
        this.location = data;
        this.locationLat = this.location.locationLat;
        this.locationLong = this.location.locationLong;

        this.currentWeather();
      },
      (error) => console.log(error)
    );
  }

  list() {
    this.router.navigate(["locations"]);
  }

  updateLocation(locationId: number) {
    this.router.navigate(["updatelocation", locationId]);
  }

  currentWeather() {
    // THIS IS CURRENT WEATHER
    this.http
      .get(
        "https://api.climacell.co/v3/weather/realtime?" +
          "lat=" +
          this.locationLat +
          "&lon=" +
          this.locationLong +
          "&unit_system=us&" +
          "fields=precipitation%2Cprecipitation_type%2Ctemp%2Cfeels_like%2Cdewpoint%2Cwind_speed%2Cwind_gust%2Cbaro_pressure%2Cvisibility%2Chumidity%2Cwind_direction%2Csunrise%2Csunset%2Ccloud_cover%2Ccloud_ceiling%2Ccloud_base%2Csurface_shortwave_radiation%2Cmoon_phase%2Cweather_code" +
          "&apikey=" +
          this.apiKey
      )
      .subscribe((data) => {
        // THIS GETS THE WHOLE OBJECT FOR USE
        this.weatherDataNow = data;
        console.log(this.weatherDataNow);
        // console.log(this.weatherDataNow.observation_time.value);

        this.currentTimeNow = this.weatherDataNow.observation_time.value;
        this.todaysSummaryNow = this.weatherDataNow.weather_code.value.replace(
          /_/g,
          " "
        );

        this.temperatureValNow = this.weatherDataNow.temp.value;
        this.temperatureUnitNow = this.weatherDataNow.temp.units;
        this.dewpointValNow = this.weatherDataNow.dewpoint.value;
        this.dewpointUnitNow = this.weatherDataNow.dewpoint.units;
        this.humidityValNow = this.weatherDataNow.humidity.value;
        this.humidityUnitNow = this.weatherDataNow.humidity.units;
        this.feelslikeValNow = this.weatherDataNow.feels_like.value;
        this.feelslikeUnitNow = this.weatherDataNow.feels_like.units;

        this.visibilityValNow = this.weatherDataNow.visibility.value;
        this.visibilityUnitNow = this.weatherDataNow.visibility.units;

        this.windBearingValNow = this.weatherDataNow.wind_direction.value;
        this.windBearingUnitNow = this.weatherDataNow.wind_direction.units;
        this.windSpeedValNow = this.weatherDataNow.wind_speed.value;
        this.windSpeedUnitNow = this.weatherDataNow.wind_speed.units;
        this.gustValNow = this.weatherDataNow.wind_gust.value;
        this.gustUnitNow = this.weatherDataNow.wind_gust.units;
        
        this.pressureValNow = this.weatherDataNow.baro_pressure.value;
        this.pressureUnitNow = this.weatherDataNow.baro_pressure.units;

        this.precipValNow = this.weatherDataNow.precipitation.value;
        this.precipUnitNow = this.weatherDataNow.precipitation.units;
        this.preciptypeValNow = this.weatherDataNow.precipitation_type.value;

        this.cloudcoverValNow = this.weatherDataNow.cloud_cover.value;
        this.cloudcoverUnitNow = this.weatherDataNow.cloud_cover.units;
        this.cloudbaseValNow = this.weatherDataNow.cloud_base.value;
        this.cloudbaseUnitNow = this.weatherDataNow.cloud_base.units;
        
        this.sunriseValNow = this.weatherDataNow.sunrise.value;
        this.sunsetValNow = this.weatherDataNow.sunset.value;
        this.moonphaseValNow = this.weatherDataNow.moon_phase.value.replace(
          /_/g,
          " "
        );

      });
  }
}
