package com.AnSp.RESTService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.AnSp.RESTService.model.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}

