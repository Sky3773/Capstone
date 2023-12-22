import React, { useState, useEffect } from 'react';
import MemberList from './MemberList';
import AddMemberForm from './AddMemberForm';
import DeleteMemberForm from './DeleteMemberForm';
import UpdateMemberForm from './UpdateMemberForm';
import './Member.css';

const MemberPage = () => {
    const [members, setMembers] = useState([]);
    const [deletedMemberId, setDeletedMemberId] = useState(null);
    const [updatedMemberId, setUpdatedMemberId] = useState(null)

    const handleDelete = (memberId) => {
        setDeletedMemberId(memberId);
    };
    const handleUpdate = () => {
        setUpdatedMemberId(null);
        // Refresh book list or perform other actions as needed
    };

    useEffect(() => {
        // Fetch members from your Spring Boot backend
        // You can use axios or fetch API
        fetch('http://localhost:8080/api/member')
            .then(response => response.json())
            .then(data => setMembers(data));
    }, []);

    const handleAddMember = newMember => {
        // Send a POST request to your Spring Boot backend to add a new member
        fetch('http://localhost:8080/api/member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMember),
        })
            .then(response => response.json())
            .then(data => setMembers([...members, data]));
    };    

    return (
        <div>
            <h1>Member Page</h1>
            <MemberList members={members} />
            <AddMemberForm onAddMember={handleAddMember} />
            <UpdateMemberForm onUpdate={() =>handleUpdate()} />
            <DeleteMemberForm onDelete={handleDelete} />
            {/* Display Deleted Member ID */}
            {deletedMemberId && <p>Member with ID {deletedMemberId} has been deleted.</p>}
        </div>
    );
};

export default MemberPage;