package com.example.demo.service;

import org.springframework.stereotype.Repository;

@Repository
public interface UserService {
	
	public int loginValidation(String name,String password); 	
}
