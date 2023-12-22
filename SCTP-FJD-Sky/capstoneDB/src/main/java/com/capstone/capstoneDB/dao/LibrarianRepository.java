package com.capstone.capstoneDB.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.capstoneDB.entity.Librarian;

@Repository
public interface LibrarianRepository extends JpaRepository<Librarian, Integer> {

}
