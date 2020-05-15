package com.AnSp.RESTService.repository;



import com.AnSp.RESTService.model.UserSavedLocations;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.data.jpa.repository.Query;

import java.util.List;


@Repository
public interface LocationsRepository extends CrudRepository<UserSavedLocations, Long>{

//	@Query(value = "select * from user_saved_locations", nativeQuery = true)
	List<UserSavedLocations> findAll();

}
