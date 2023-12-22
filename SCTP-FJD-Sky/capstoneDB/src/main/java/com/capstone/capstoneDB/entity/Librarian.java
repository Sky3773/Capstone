package com.capstone.capstoneDB.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="librarians")
public class Librarian {
	@Id
	private int librarianID;
	private String name;
	private String address;
	private int number;
	private String email;

	
	public Librarian() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Librarian(int librarianID, String name, String address, int number, String email) {
		super();
		this.librarianID = librarianID;
		this.name = name;
		this.address = address;
		this.number = number;
		this.email = email;
		
	}



	public int getLibrarianID() {
		return librarianID;
	}

	public void setLibrarianID(int librarianID) {
		this.librarianID = librarianID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	

	
}
