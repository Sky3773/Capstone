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

import com.capstone.capstoneDB.dao.TransactionRepository;
import com.capstone.capstoneDB.entity.Transaction;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TransactionController {
	
	private TransactionRepository transactionRepo;
	
	public TransactionController(TransactionRepository transactionRepo) {
		this.transactionRepo = transactionRepo;
	}
	
	@GetMapping("/transaction")
	public List<Transaction> getAllTransactions() {
		return transactionRepo.findAll();
	}
	
	@PostMapping("/transaction")
	public String addTransaction(@RequestBody Transaction transaction) {
		
		transactionRepo.save(transaction);
		return "Transaction added!";
	}
	
	@PutMapping("/transaction/{transactionID}")
	public String updateTransaction(@RequestBody Transaction trans) {
		transactionRepo.save(trans);
		return "Transaction updated!";
	}
	
	@DeleteMapping("/transaction/{transactionID}")
	public String deleteTransaction(@PathVariable int transactionID) {
		
		transactionRepo.deleteById(transactionID);
		return "Transaction deleted!";
	}

}
