package com.AnSp.RESTService.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AnSp.RESTService.model.UserSavedLocations;
import com.AnSp.RESTService.repository.LocationsRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class UserSavedLocationsController {
	
	@Autowired
	private LocationsRepository locationsRepository;
	
	@GetMapping("/userSavedLocations")
	public List<UserSavedLocations> getAllUserLocations() {
		
		return this.locationsRepository.findAll();
	}

}
