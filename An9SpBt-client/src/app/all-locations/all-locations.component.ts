import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSavedLocationsService } from '../user-saved-locations.service';
import { UserSavedLocations } from '../UserSavedLocations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-locations',
  templateUrl: './all-locations.component.html',
  styleUrls: ['./all-locations.component.css']
})
export class AllLocationsComponent implements OnInit {
    locations: Observable<UserSavedLocations[]>;


  constructor(private locationService: UserSavedLocationsService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.locations = this.locationService.getUserSavedLocationsList();
  }

  deleteLocation(locationId: number) {             // <-- needs back-end
    this.locationService.deleteLocation(locationId)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  locationDetails(locationId: number) {
    this.router.navigate(['selectedlocation', locationId]);   // <-- needs back-end
  }

  updateLocation(locationId: number) {
    this.router.navigate(['updatelocation', locationId]);     // <-- needs back-end
  }

}
