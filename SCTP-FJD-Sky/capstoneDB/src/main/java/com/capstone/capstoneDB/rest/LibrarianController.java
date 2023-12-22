package com.capstone.capstoneDB.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.capstoneDB.dao.LibrarianRepository;
import com.capstone.capstoneDB.entity.Librarian;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LibrarianController {
	
	private LibrarianRepository librarianRepo;
	
	public LibrarianController(LibrarianRepository librarianRepo) {
		this.librarianRepo = librarianRepo;
	}
	
	@GetMapping("/librarian")
	public List<Librarian> getAllLibrarians() {
		return librarianRepo.findAll();
	}
	
	@PostMapping("/librarian")
	public String addLibrarian(@RequestBody Librarian librarian) {
		librarianRepo.save(librarian);
		return "Librarian added!";
	}
	
	@PutMapping("/librarian/{librarianID}")
	public String updateLibrarian(@RequestBody Librarian librarian) {
		librarianRepo.save(librarian);
		return "Librarian details updated!";
	}
	
	@DeleteMapping("/librarian")
	public String deleteLibrarian(@PathVariable int librarianID) {
		librarianRepo.deleteById(librarianID);
		return "Librarian deleted!";
	}

}
