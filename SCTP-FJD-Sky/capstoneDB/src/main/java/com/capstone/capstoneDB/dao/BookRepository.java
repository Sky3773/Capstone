package com.capstone.capstoneDB.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.capstoneDB.entity.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, String>{
   
}