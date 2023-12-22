package com.capstone.capstoneDB.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="books")
public class Book {
	@Id
	private String isbn;
	private String title;
	private String author;
	private String category;
	private String availability;
	private double price;
	private int copies;
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Book(String isbn, String title, String author, String category, String availability, double price,
			int copies) {
		super();
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.category = category;
		this.availability = availability;
		this.price = price;
		this.copies = copies;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getCopies() {
		return copies;
	}

	public void setCopies(int copies) {
		this.copies = copies;
	}

	
	

}
