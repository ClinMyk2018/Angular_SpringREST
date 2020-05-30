import { Component, OnInit, Input } from "@angular/core";
import { UserSavedLocations } from "../UserSavedLocations";
import { environment } from '../../environments/environment';
import { WeatherDataComponent } from "../weather-data/weather-data.component";
import { ActivatedRoute, Router } from "@angular/router";
import { UserSavedLocationsService } from "../user-saved-locations.service";
import { AllLocationsComponent } from "../all-locations/all-locations.component";

@Component({
  selector: "app-selectedlocation",
  templateUrl: "./selectedlocation.component.html",
  styleUrls: ["./selectedlocation.component.css"],
})
export class SelectedlocationComponent implements OnInit {
  locationId: number;
  location: UserSavedLocations;
  locLat: any;
  locLon: any;
  apiKey: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: UserSavedLocationsService
  ) {}

  ngOnInit() {

    this.apiKey = environment.climacell.accessToken;

    this.location = new UserSavedLocations();

    this.locationId = this.route.snapshot.params["locationId"];

    this.locationService
      .getLocation(this.locationId)
      .subscribe(
        (data) => {
          console.log(data);
          this.location = data;
          this.locLat = this.location.locationLat;
          console.log(this.locLat);
          this.locLon = this.location.locationLong;
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
}
