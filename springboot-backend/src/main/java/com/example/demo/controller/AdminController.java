package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
//import java.util.Optional;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Admin;
import com.example.demo.model.Employee;
import com.example.demo.repository.AdminJparepository;

import com.example.demo.service.UserService;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

	@Autowired
	private AdminJparepository adminrepository;
	@Autowired
	private UserService userservice;
	
	@PostMapping("/admin")
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminrepository.save(admin);
	}
	
	@GetMapping("/admin")
	public List<Admin> getAllAdmin(){
		return adminrepository.findAll();
	}
	
	@DeleteMapping("/admin/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMapping(@PathVariable int id){
		Optional<Admin> employee2=adminrepository.findById(id);
		if(employee2.isPresent()) {
			adminrepository.deleteById(id);
			Map<String, Boolean> response =new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		else {
			return null;
		}
		}
	
	@GetMapping("/{username}/{password}")
	 public int UserLogin (@PathVariable("username") String usernamel, @PathVariable("password") String password1){
		int flag = userservice.loginValidation (usernamel, password1);
		//su s=new su();

		if(flag == 0) {
//s.setM(flag);
		return 0;

		}else {
  // s.setM(1);
		return flag; 
		

	}

	}

//	@GetMapping("/login")
//	public int login(@RequestBody Admin admin) {
//		Optional<Admin> admin2=adminrepository.findById(admin.getId());
//		if(admin2.get().getName().equals(admin.getName()) && admin2.get().getPassword().equals(admin.getPassword())) {
//			return 1;
//		}
//		else {
//			return 0;
//		}
//		
//	}
}
