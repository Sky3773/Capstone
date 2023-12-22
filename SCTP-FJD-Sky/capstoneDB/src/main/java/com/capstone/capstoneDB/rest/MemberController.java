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

import com.capstone.capstoneDB.dao.MemberRepository;
import com.capstone.capstoneDB.entity.Member;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class MemberController {
	
	private MemberRepository memberRepo;
	
	public MemberController(MemberRepository memberRepo) {
		this.memberRepo = memberRepo;
	}
	
	@GetMapping("/member")
	public List<Member> getAllMembers() {
		return memberRepo.findAll();
	}
	
	@PostMapping("/member")
	public String addMember(@RequestBody Member member) {
		memberRepo.save(member);
		return "Member added!";
	}
	
	@PutMapping("/member/{memberID}")
	public String updateMember(@RequestBody Member member) {
		memberRepo.save(member);
		return "Member details updated!";
	}
	
	@DeleteMapping("/member/{memberID}")
	public String deleteMember(@PathVariable int memberID) {
		
		memberRepo.deleteById(memberID);
		return "Member deleted!";
		
	}

}
