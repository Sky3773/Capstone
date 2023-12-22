package com.capstone.capstoneDB.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="transactions")
public class Transaction {
	
	@Id
	private int transactionID;
	private String borrowed_date;
	private String due_date;
	private String actual_return_date;
	private int fine;
	private String isbn;
	private int memberID;
	private int librarianID;
	
	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Transaction(int transactionID, String borrowed_date, String due_date, String actual_return_date, int fine,
			String isbn, int memberID, int librarianID) {
		super();
		this.transactionID = transactionID;
		this.borrowed_date = borrowed_date;
		this.due_date = due_date;
		this.actual_return_date = actual_return_date;
		this.fine = fine;
		this.isbn = isbn;
		this.memberID = memberID;
		this.librarianID = librarianID;
	}

	public int getTransactionID() {
		return transactionID;
	}

	public void setTransactionID(int transactionID) {
		this.transactionID = transactionID;
	}

	public String getBorrowed_date() {
		return borrowed_date;
	}

	public void setBorrowed_date(String borrowed_date) {
		this.borrowed_date = borrowed_date;
	}

	public String getDue_date() {
		return due_date;
	}

	public void setDue_date(String due_date) {
		this.due_date = due_date;
	}

	public String getActual_return_date() {
		return actual_return_date;
	}

	public void setActual_return_date(String actual_return_date) {
		this.actual_return_date = actual_return_date;
	}

	public int getFine() {
		return fine;
	}

	public void setFine(int fine) {
		this.fine = fine;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public int getMemberID() {
		return memberID;
	}

	public void setMemberID(int memberID) {
		this.memberID = memberID;
	}

	public int getLibrarianID() {
		return librarianID;
	}

	public void setLibrarianID(int librarianID) {
		this.librarianID = librarianID;
	}
	
	

	
	
	
	

}
