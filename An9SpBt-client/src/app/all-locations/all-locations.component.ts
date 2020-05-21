import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserSavedLocationsService } from "../user-saved-locations.service";
import { UserSavedLocations } from "../UserSavedLocations";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-locations",
  templateUrl: "./all-locations.component.html",
  styleUrls: ["./all-locations.component.css"],
})
export class AllLocationsComponent implements OnInit {
  locations: Observable<UserSavedLocations[]>;
  totalLocations: any;


  constructor(
    private locationService: UserSavedLocationsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
    this.totalLocations = this.locations.subscribe(result => {console.log(result.length)});
    console.log(this.totalLocations);
  }

  reloadData() {
    this.locations = this.locationService.getUserSavedLocationsList();
  }

  deleteLocation(locationId: number) {           // This has ASYNC problems...
    // <-- needs back-end
    this.locationService.deleteLocation(locationId).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  locationDetails(locationId: number) {
    this.router.navigate(["selectedlocation", locationId]);
  }

  updateLocation(locationId: number) {
    this.router.navigate(["updatelocation", locationId]);
  }

  createLocation() {
    this.router.navigate(["addlocation"]);
  }
}
