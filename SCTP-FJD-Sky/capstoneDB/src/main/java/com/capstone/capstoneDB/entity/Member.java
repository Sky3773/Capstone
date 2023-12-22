package com.capstone.capstoneDB.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="members")
public class Member {
	@Id
	private int memberID;
	private String name;
	private String address;
	private int number;
	private String email;
	
	public Member() {
		super();
	}

	public Member(int memberID, String name, String address, int number, String email) {
		super();
		this.memberID = memberID;
		this.name = name;
		this.address = address;
		this.number = number;
		this.email = email;
		
	}



	public int getMemberID() {
		return memberID;
	}

	public void setMemberID(int memberID) {
		this.memberID = memberID;
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

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

	
	
	

}
