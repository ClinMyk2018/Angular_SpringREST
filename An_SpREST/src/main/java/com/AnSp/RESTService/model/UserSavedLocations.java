package com.AnSp.RESTService.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "userSavedLocations")
public class UserSavedLocations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", unique = true, nullable = false)
    private Integer locationId;

    @Column(name = "LOCATION_NAME", nullable = false, length = 100)
    private String locationName;

    @Column(name = "LOCATION_LAT", nullable = false, length = 100)
    private String locationLat;

    @Column(name = "LOCATION_LONG", nullable = false, length = 100)
    private String locationLong;

    @ManyToOne
    private Employee employee;

    public UserSavedLocations() {

    }

    public UserSavedLocations(String locationName, String locationLat, String locationLong) {
        this.locationName = locationName;
        this.locationLat = locationLat;
        this.locationLong = locationLong;
    }

    public UserSavedLocations(String locationName, String locationLat, String locationLong, Employee employee) {
        this.locationName = locationName;
        this.locationLat = locationLat;
        this.locationLong = locationLong;
        this.employee = employee;
    }

    public UserSavedLocations(Integer locationId, String locationName, String locationLat, String locationLong,
            Employee employee) {
        this.locationId = locationId;
        this.locationName = locationName;
        this.locationLat = locationLat;
        this.locationLong = locationLong;
        this.employee = employee;
    }

    public Integer getLocationId() {
        return locationId;
    }

    public void setLocationId(Integer locationId) {
        this.locationId = locationId;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public String getLocationLat() {
        return locationLat;
    }

    public void setLocationLat(String locationLat) {
        this.locationLat = locationLat;
    }

    public String getLocationLong() {
        return locationLong;
    }

    public void setLocationLong(String locationLong) {
        this.locationLong = locationLong;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "UserSavedLocations [employee=" + employee + ", locationId=" + locationId + ", locationLat="
                + locationLat + ", locationLong=" + locationLong + ", locationName=" + locationName + "]";
    }

}