import { Component, OnInit, Input } from '@angular/core';
import { UserSavedLocations } from '../UserSavedLocations';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSavedLocationsService } from '../user-saved-locations.service';
import { AllLocationsComponent } from '../all-locations/all-locations.component';

@Component({
  selector: 'app-selectedlocation',
  templateUrl: './selectedlocation.component.html',
  styleUrls: ['./selectedlocation.component.css']
})
export class SelectedlocationComponent implements OnInit {

  locationId: number;
  location: UserSavedLocations;

  constructor(private route: ActivatedRoute, private router: Router, private locationService: UserSavedLocationsService) { }

  ngOnInit() {
    this.location = new UserSavedLocations();

    this.locationId = this.route.snapshot.params['locationId'];

    this.locationService.getLocation(this.locationId)   // <-- needs back-end
      .subscribe(data => {
        console.log(data)
        this.location = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['locations']);
  }

  // updateLocation(locationId: number) {
  //   this.router.navigate(['updatelocation', id]);
  // }

}
