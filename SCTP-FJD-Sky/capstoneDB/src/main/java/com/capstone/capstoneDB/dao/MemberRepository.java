package com.capstone.capstoneDB.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.capstoneDB.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

}
