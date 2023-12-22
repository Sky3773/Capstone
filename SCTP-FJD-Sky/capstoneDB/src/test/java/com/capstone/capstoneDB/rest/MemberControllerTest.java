package com.capstone.capstoneDB.rest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import com.capstone.capstoneDB.dao.MemberRepository;
import com.capstone.capstoneDB.entity.Member;

public class MemberControllerTest {

    private MemberController memberController;
    private MemberRepository memberRepo;

    @BeforeEach
    public void setUp() {
        // Create a mock for MemberRepository
        memberRepo = mock(MemberRepository.class);

        // Initialize MemberController with the mock repository
        memberController = new MemberController(memberRepo);
    }

    @Test
    public void testGetAllMembers() {
        // Arrange
        List<Member> members = new ArrayList<>();
        members.add(new Member(1, "John Doe", "Address1", 12345, "john@example.com"));
        members.add(new Member(2, "Jane Smith", "Address2", 67890, "jane@example.com"));

        when(memberRepo.findAll()).thenReturn(members);

        // Act
        List<Member> result = memberController.getAllMembers();

        // Assert
        assertEquals(members, result);
    }

    @Test
    public void testAddMember() {
        // Arrange
        Member newMember = new Member(1, "New Member", "New Address", 54321, "new@example.com");

        // Act
        String response = memberController.addMember(newMember);

        // Assert
        assertEquals("Member added!", response);
        verify(memberRepo, times(1)).save(newMember);
    }

    @Test
    public void testUpdateMember() {
        // Arrange
        Member existingMember = new Member(1, "Existing Member", "Old Address", 98765, "existing@example.com");

        // Act
        String response = memberController.updateMember(existingMember);

        // Assert
        assertEquals("Member details updated!", response);
        verify(memberRepo, times(1)).save(existingMember);
    }

    @Test
    public void testDeleteMember() {
        // Arrange
        int memberId = 1;

        // Act
        String response = memberController.deleteMember(memberId);

        // Assert
        assertEquals("Member deleted!", response);
        verify(memberRepo, times(1)).deleteById(memberId);
    }
}