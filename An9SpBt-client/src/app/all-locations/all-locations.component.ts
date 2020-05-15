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

}
