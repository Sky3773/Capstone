package com.capstone.capstoneDB.rest;

import java.util.List;
import org.springframework.http.HttpStatus;
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

import com.capstone.capstoneDB.dao.LoginDetailsRepository;
import com.capstone.capstoneDB.entity.LoginDetails;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LoginController {
	
	private LoginDetailsRepository loginRepo;
	
	public LoginController(LoginDetailsRepository loginRepo) {
		this.loginRepo = loginRepo;
	}
	
	@GetMapping("/login")
	public List<LoginDetails> getAllLoginDetails() {
		return loginRepo.findAll();
	}
	
	@PostMapping("/login/add")
	public String addLoginDetails(@RequestBody LoginDetails login) {
		loginRepo.save(login);
		return "Login details added!";
		
	}
	
	
	@PutMapping("/login/{username}")
	public String updateLoginDetails(@RequestBody LoginDetails login) {
		loginRepo.save(login);
		return "Login details updated!";
	}


	@PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDetails loginRequest) {
        
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
//        String role = loginRequest.getRole();
        System.out.println(username);
        System.out.println(password);
        LoginDetails loginDetails = loginRepo.findByUsername(username);
        if (loginDetails != null )
        	
//        
//            // If credentials match, consider the user as logged in
//        {loginDetails.setPassword(null);
//        loginDetails.setRole(role);
//           

            return new ResponseEntity<>(loginDetails, HttpStatus.OK);
         else {
            return  new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
	
	@DeleteMapping("/login/{username}")
	public String deleteLoginDetails(@PathVariable String username) {
		loginRepo.deleteById(username);
		return "Login details deleted!";
		
	}
	

}
