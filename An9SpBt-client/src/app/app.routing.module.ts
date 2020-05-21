import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { UiMapComponent } from "./ui-map/ui-map.component";
import { AllLocationsComponent } from "./all-locations/all-locations.component";
import { SelectedlocationComponent } from "./selectedlocation/selectedlocation.component";
import { UpdatelocationComponent } from "./updatelocation/updatelocation.component";
import { NewLocationComponent } from "./new-location/new-location.component";

const routes: Routes = [
  { path: "", redirectTo: "employee", pathMatch: "full" },
  { path: "employees", component: EmployeeListComponent },
  { path: "add", component: CreateEmployeeComponent },
  { path: "update/:id", component: UpdateEmployeeComponent },
  { path: "details/:id", component: EmployeeDetailsComponent },
  // { path: 'map', component: UiMapComponent },
  { path: "locations", component: AllLocationsComponent },
  { path: "addlocation", component: NewLocationComponent },
  {
    path: "selectedlocation/:locationId",
    component: SelectedlocationComponent,
  },
  { path: "updatelocation/:locationId", component: UpdatelocationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
