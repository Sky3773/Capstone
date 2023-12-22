package com.capstone.capstoneDB.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.capstoneDB.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer>{

}
