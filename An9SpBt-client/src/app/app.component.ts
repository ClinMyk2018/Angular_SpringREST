import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from "rxjs";
import { UserSavedLocationsService } from "./user-saved-locations.service";
import { UserSavedLocations } from "./UserSavedLocations";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  locations: Observable<UserSavedLocations[]>;
  param: string;
  locationId: number;   // THIS ENDS UP BEING POINTLESS, SEE BELOW FUNCTION NOTES


  title = 'Angular - Spring CRUD App';

  constructor(private locationService: UserSavedLocationsService, private router: Router, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
    this.locations = this.locationService.getUserSavedLocationsList();
  }

  locationDetails(locationId: number) {
    console.log(locationId);
    this.locationId = this.route.snapshot.params["locationId"];     // I CANNOT GET THIS TO WORK
    console.log(this.locationId);                                   // RETURNS UNDEFINED
    if (locationId !== this.route.snapshot.params["locationId"]){   // THIS IS POINTLESS
    this.router.navigate(["selectedlocation", locationId]);
    }
  }

}
