package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Admin {
     @Id
	int id;
     String name;
     String password;
 	String email;
 	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Admin(int id, String password, String name, String email) {
		super();
		this.id=id;
		this.password=password;
		this.name = name;
		this.email = email;
	}
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
