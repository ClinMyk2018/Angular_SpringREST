package com.AnSp.RESTService.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id", nullable = false)
    private long employeeId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email_address", nullable = false)
    private String emailId;

    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<UserSavedLocations> locations;
    

    public Employee() {

    }

    public Employee(String firstName, String lastName, String emailId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }

    public Employee(String firstName, String lastName, String emailId,
            Set<UserSavedLocations> locations) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.locations = locations;
    }

    public Employee(long employeeId, String firstName, String lastName, String emailId,
            Set<UserSavedLocations> locations) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.locations = locations;
    }

    public long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(long employeeId) {
        this.employeeId = employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public Set<UserSavedLocations> getLocations() {
        return locations;
    }

    public void setLocations(Set<UserSavedLocations> locations) {
        this.locations = locations;
    }

    @Override
    public String toString() {
        return "Employee [emailId=" + emailId + ", employeeId=" + employeeId + ", firstName=" + firstName
                + ", lastName=" + lastName + ", locations=" + locations + "]";
    }

}
