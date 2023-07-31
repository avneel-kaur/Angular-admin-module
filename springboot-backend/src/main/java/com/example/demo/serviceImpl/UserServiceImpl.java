package com.example.demo.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

import com.example.demo.dbutil.DbUtil;
import com.example.demo.service.UserService;

@Service
public class UserServiceImpl implements UserService{
    
	int flag =0;
	Connection connection;
	
	public UserServiceImpl() throws SQLException {
		
		connection = DbUtil.getConnection();
	}
	
	
	@Override
	public int loginValidation(String name, String password) {
		
		
		try {
			PreparedStatement statement = connection.prepareStatement("SELECT * FROM admin WHERE name = '"+name+"'");
			   ResultSet rs = statement.executeQuery();
			   while(rs.next()) {
			    	
			    	if(rs.getString(3).equals(name) && rs.getString(4).equals(password)) {
			    		flag = 1;
			    		}else {
				    	System.out.println("Invalid Username or Password");
				    	flag = 0;
			    	}
		
			   }
		}catch (SQLException e) {
			
			e.printStackTrace();
		}

		return flag;
	}

}
