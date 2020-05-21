package com.AnSp.RESTService.controller;

import java.util.HashMap;
import java.util.List;
//import java.util.stream.Collectors;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.AnSp.RESTService.exception.ResourceNotFoundException;
import com.AnSp.RESTService.model.UserSavedLocations;
import com.AnSp.RESTService.repository.LocationsRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class UserSavedLocationsController {
	
	@Autowired
	private LocationsRepository locationsRepository;
	
	// Get All Locations
	@GetMapping("/userSavedLocations")
	public List<UserSavedLocations> getAllUserLocations() {
		
		return this.locationsRepository.findAll();
	}
	
	// Get One Location By ID
	@GetMapping("/userSavedLocations/{locationId}")
	public ResponseEntity<UserSavedLocations> getLocation(@PathVariable(value = "locationId") String locationId) {
		UserSavedLocations location = locationsRepository.findById(Long.parseLong(locationId)).get();
		return ResponseEntity.ok(location);
		}
	
	// Create New Location
	@PostMapping("/userSavedLocations")
	public UserSavedLocations createLocation(@Valid @RequestBody UserSavedLocations location) {
		return locationsRepository.save(location); // This will later use the employee logged-in
	}
	

	// Update Location
	@PutMapping("/userSavedLocations/{locationId}")
	public ResponseEntity<UserSavedLocations> updateLocation(@PathVariable(value = "locationId") Long locationId,
			@Valid @RequestBody UserSavedLocations locationDetails, 
			@ModelAttribute UserSavedLocations locations) 
					throws ResourceNotFoundException {
		
				UserSavedLocations location = locationsRepository.findById((Long)locationId)
						.orElseThrow(() -> new ResourceNotFoundException("Location not found for this id :: " + (Long)locationId));

				
		location.setLocationName(locationDetails.getLocationName());
		location.setLocationLat(locationDetails.getLocationLat());
		location.setLocationLong(locationDetails.getLocationLong());
		final UserSavedLocations updatedLocation = locationsRepository.save(locationDetails);
		return ResponseEntity.ok(updatedLocation);
	}

	// Delete Location
	@DeleteMapping("/userSavedLocations/{locationId}")
	public Object deleteLocation(@PathVariable(value = "locationId") Long locationId) 
			throws ResourceNotFoundException {
		UserSavedLocations location = locationsRepository.getUserSavedLocationsBylocationId((Long)locationId)
				.orElseThrow(() -> new ResourceNotFoundException("Location not found for this id :: " + (Long)locationId));

		locationsRepository.delete(location);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	
	}

}
