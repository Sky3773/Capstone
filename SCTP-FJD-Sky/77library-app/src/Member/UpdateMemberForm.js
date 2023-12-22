import React, { useState } from 'react';

const UpdateMemberForm = ({ member, onUpdate }) => {
    const [updatedMemberID, setUpdatedMemberID] = useState(0);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedAddress, setUpdatedAddress] = useState('');
    const [updatedNumber, setUpdatedNumber] = useState(0);
    const [updatedEmail, setUpdatedEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/member/${updatedMemberID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    memberID: updatedMemberID,
                    name: updatedName,
                    address: updatedAddress,
                    number: updatedNumber,
                    email: updatedEmail
                }),
            });

            if (response.ok) {
                console.log('Member updated successfully!');
                // Reset form or redirect as needed
                window.location.href = '/member'
            } else {
                console.error('Failed to update member.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Member</h2>
            <label>Member ID:</label>
            <input
                type="number"
                value={updatedMemberID}
                onChange={(e) => setUpdatedMemberID(e.target.value)}
            /><br/>

            <label>Name:</label>
            <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
            /><br/>

            <label>Address:</label>
            <input
                type="text"
                value={updatedAddress}
                onChange={(e) => setUpdatedAddress(e.target.value)}
            /><br/>

            <label>Number:</label>
            <input
                type="number"
                value={updatedNumber}
                onChange={(e) => setUpdatedNumber(e.target.value)}
            /><br/>

            <label>Email:</label>
            <input
                type="text"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
            /><br/>

            <button type="submit">Update Member</button>
        </form>
    );
};

export default UpdateMemberForm;