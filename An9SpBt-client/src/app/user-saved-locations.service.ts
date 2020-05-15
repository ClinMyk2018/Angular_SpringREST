import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSavedLocationsService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/userSavedLocations';

  constructor(private http: HttpClient) { }

  getUserSavedLocations(locationId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${locationId}`);
  }

  createUserSavedLocations(userSavedLocations: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, userSavedLocations);
  }

  updateUserSavedLocations(locationId: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${locationId}`, value);
  }

  deleteUserSavedLocations(locationId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${locationId}`, { responseType: 'text' });
  }

  getUserSavedLocationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
