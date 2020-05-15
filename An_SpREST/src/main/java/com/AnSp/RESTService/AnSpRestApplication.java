package com.AnSp.RESTService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.AnSp.RESTService.model.Employee;
import com.AnSp.RESTService.repository.EmployeeRepository;
import com.AnSp.RESTService.model.UserSavedLocations;
import com.AnSp.RESTService.repository.LocationsRepository;

@SpringBootApplication
public class AnSpRestApplication implements CommandLineRunner {

	@Bean
	public ModelMapper modelMapper() {
	    return new ModelMapper();
	}
	
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private LocationsRepository locationsRepository;

    @Override
    public void run(String...args) throws Exception {
    	
    	long dbLocationsTableEmpty = locationsRepository.count();
    	// Count how many employees are in database to see if you need to load these at start
    	long dbEmployeeTableEmpty = employeeRepository.count();
    	// Is DataBase Empty?
    	if(dbEmployeeTableEmpty == 0) {

        // Create an employee
        Employee employee = new Employee();
        employee.setFirstName("MeFirst");
        employee.setLastName("MeLast");
        employee.setEmailId("meFirstLast@gmail.com");
        employeeRepository.save(employee);
        
        Employee employee1 = new Employee();
        employee1.setFirstName("Tom");
        employee1.setLastName("Cruise");
        employee1.setEmailId("tom@gmail.com");
        employeeRepository.save(employee1);
        
        Employee employee2 = new Employee();
        employee2.setFirstName("Tony");
        employee2.setLastName("Stark");
        employee2.setEmailId("tony@gmail.com");
        employeeRepository.save(employee2);

        Employee employee3 = new Employee();
        employee3.setFirstName("Mark");
        employee3.setLastName("Awesome");
        employee3.setEmailId("mark@gmail.com");
        employeeRepository.save(employee3);

        Employee employee4 = new Employee();
        employee4.setFirstName("Jannet");
        employee4.setLastName("Wick");
        employee4.setEmailId("jannet@gmail.com");
        employeeRepository.save(employee4);

        Employee employee5 = new Employee();
        employee5.setFirstName("Susan");
        employee5.setLastName("Storm");
        employee5.setEmailId("susan@gmail.com");
        employeeRepository.save(employee5);
        
    	}
    	
    	if (dbLocationsTableEmpty == 0) {
    		
            // Create a test location
            UserSavedLocations location = new UserSavedLocations();
            location.setLocationLat("29");
            location.setLocationLong("-98");
            location.setLocationName("Test Location");
            location.setEmployee(employeeRepository.getOne(1L)); 
            locationsRepository.save(location);
            
    	}
    }

    public static void main(String[] args) {
        SpringApplication.run(AnSpRestApplication.class, args);
    }
}
