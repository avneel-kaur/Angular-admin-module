package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeJparepository;


@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@Autowired
	private EmployeeJparepository employeerepository;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeerepository.findAll();
	}
	
	@GetMapping("employees/{id}")
	public Employee getEmployeeById(@PathVariable int id) {
		Optional<Employee> result = employeerepository.findById(id);
		if(result.isPresent()) {
			return result.get();
		}
		return null;
	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeerepository.save(employee);
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMapping(@PathVariable int id){
		Optional<Employee> employee2=employeerepository.findById(id);
		if(employee2.isPresent()) {
			employeerepository.deleteById(id);
			Map<String, Boolean> response =new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		else {
			return null;
		}
		}
	
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails){
		Optional<Employee> employee1=employeerepository.findById(id);
		if(employee1.isPresent()) {
			Employee employee2=employee1.get();
		    employee2.setId(employeeDetails.getId());
		employee2.setFirstName(employeeDetails.getFirstName());
		employee2.setLastName(employeeDetails.getLastName());
		employee2.setCity(employeeDetails.getCity());
		employee2.setRole(employeeDetails.getRole());
		employee2.setEmailId(employeeDetails.getEmailId());
		employee2.setMobileNumber(employeeDetails.getMobileNumber());
		employee2.setYop(employeeDetails.getYop());
		
		Employee updateEmployee=employeerepository.save(employee2);
		return ResponseEntity.ok(updateEmployee);
		}
		else {
			return null;
		}
		
				
		
	}
	
	
}
