import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserSavedLocationsService {
  private baseUrl =
    "http://localhost:8080/springboot-crud-rest/api/userSavedLocations";

  constructor(private http: HttpClient) {}

  getLocation(locationId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${locationId}`);
  }

  createLocation(userSavedLocations: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, userSavedLocations);
  }

  updateLocation(locationId: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${locationId}`, value);
  }

  deleteLocation(locationId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${locationId}`, {
      responseType: "text",
    });
  }

  getUserSavedLocationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
