package com.AnSp.RESTService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.AnSp.RESTService.model.Employee;
import com.AnSp.RESTService.repository.EmployeeRepository;

@SpringBootApplication
public class AnSpRestApplication implements CommandLineRunner {

	@Bean
	public ModelMapper modelMapper() {
	    return new ModelMapper();
	}
	
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void run(String...args) throws Exception {

        // Create an employee
        Employee employee = new Employee();
        employee.setFirstName("MeFrst");
        employee.setLastName("MeLst");
        employee.setEmailId("MeFrstLst@gmail.com");
        employeeRepository.save(employee);
        // Create an employee
        Employee employee1 = new Employee();
        employee1.setFirstName("Tom");
        employee1.setLastName("Cruise");
        employee1.setEmailId("tom@gmail.com");
        employeeRepository.save(employee1);
     // Create an employee
        Employee employee2 = new Employee();
        employee2.setFirstName("Tony");
        employee2.setLastName("Stark");
        employee2.setEmailId("tony@gmail.com");
        employeeRepository.save(employee2);
    }

    public static void main(String[] args) {
        SpringApplication.run(AnSpRestApplication.class, args);
    }
}
