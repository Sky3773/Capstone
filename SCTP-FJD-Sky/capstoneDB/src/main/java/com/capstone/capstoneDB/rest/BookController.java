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

import com.capstone.capstoneDB.dao.BookRepository;
import com.capstone.capstoneDB.entity.Book;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BookController {
    private BookRepository bookRepo;
    
    public BookController(BookRepository bookRepo) {
	    this.bookRepo = bookRepo;
    }
    
    @GetMapping("/book")
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }
    
    
    @PostMapping("/book")
    public String addBook(@RequestBody Book book) {
        
    	bookRepo.save(book);
    	System.out.println(book);
    	return "Book added!";
    }
    
    @PutMapping("/book/{isbn}")
	public String updateBook(@RequestBody Book book) {
		bookRepo.save(book);
		return "Login details updated!";
	}
    
    @DeleteMapping("/book/{isbn}")
    public String deleteBook(@PathVariable String isbn) {
    	
    	bookRepo.deleteById(isbn);
    	return "Book deleted!";
        
}
    
}