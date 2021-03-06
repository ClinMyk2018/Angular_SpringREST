import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UiMapComponent } from './ui-map/ui-map.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { AllLocationsComponent } from './all-locations/all-locations.component';
import { SelectedlocationComponent } from './selectedlocation/selectedlocation.component';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { NewLocationComponent } from './new-location/new-location.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    UiMapComponent,
    WeatherDataComponent,
    AllLocationsComponent,
    SelectedlocationComponent,
    UpdatelocationComponent,
    NewLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
