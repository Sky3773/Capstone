import React, { useState } from 'react';

const AddMemberForm = ({ onAddMember }) => {
    const [memberID, setMemberID] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/member', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    memberID,
                    name,
                    address,
                    number,
                    email
                }),
            });

            if (response.ok) {
                console.log('Member saved successfully!');
                // Reset form or redirect as needed
            } else {
                console.error('Failed to save member.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Add Member</h2>
            <form onSubmit={handleSubmit}>
            <label>Member ID:</label>
            <input type="number" value={memberID} onChange={(e) => setMemberID(e.target.value)} /><br/>

            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>

            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br/>

            <label>Contact Number:</label>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} /><br/>

            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>

            <button type="submit">Save Member</button>
        </form>
        </div>
    );
};

export default AddMemberForm;