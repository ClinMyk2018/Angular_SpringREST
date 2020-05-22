import { Component, OnInit } from '@angular/core';
import { UserSavedLocations } from '../UserSavedLocations';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSavedLocationsService } from '../user-saved-locations.service'

@Component({
  selector: 'app-updatelocation',
  templateUrl: './updatelocation.component.html',
  styleUrls: ['./updatelocation.component.css']
})
export class UpdatelocationComponent implements OnInit {

  locationId: number;
  location: UserSavedLocations;

  constructor(private route: ActivatedRoute, private router: Router, private locationService: UserSavedLocationsService) { }

  ngOnInit(): void {

    this.location = new UserSavedLocations();

    this.locationId = this.route.snapshot.params['locationId'];

    this.locationService.getLocation(this.locationId)
    .subscribe(data => {
      console.log(data)
      this.location = data;
    }, error => console.log(error));
  }

  updateLocation() {
    this.locationService.updateLocation(this.locationId, this.location)
      .subscribe(data => console.log(data), error => console.log(error));
    this.location = new UserSavedLocations();
    this.gotoList();
  }

  onSubmit() {
    this.updateLocation();
  }

  gotoList() {
    this.router.navigate(['/locations']);
  }

}
