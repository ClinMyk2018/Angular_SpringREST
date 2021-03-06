import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserSavedLocationsService } from "../user-saved-locations.service";
import { UserSavedLocations } from "../UserSavedLocations";

@Component({
  selector: "app-new-location",
  templateUrl: "./new-location.component.html",
  styleUrls: ["./new-location.component.css"],
})
export class NewLocationComponent implements OnInit {
  location: UserSavedLocations = new UserSavedLocations();
  submitted = false;
  Locations: Observable<UserSavedLocations[]>;
  totalLocations: any;

  constructor(
    private locationService: UserSavedLocationsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.Locations = this.locationService.getUserSavedLocationsList();
    this.totalLocations = this.Locations.subscribe(result => {console.log(result.length)});
    console.log(this.totalLocations);
    
  }

  newLocation(): void {
    this.submitted = false;
    this.location = new UserSavedLocations();
  }

  save() {
    this.locationService.createLocation(this.location).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.location = new UserSavedLocations();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(["/locations"]);
  }


}
