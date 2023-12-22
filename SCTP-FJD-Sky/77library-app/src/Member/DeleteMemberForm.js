import React, { useState } from 'react';

const DeleteMemberForm = ({ onDelete }) => {
    const [memberID, setMemberId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/member/${memberID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Member deleted successfully!');
                onDelete(memberID); // Notify parent component about the deletion
                window.location.href = '/member'
            } else {
                console.error('Failed to delete member.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Member ID:</label>
            <input
                type="text"
                value={memberID}
                onChange={(e) => setMemberId(e.target.value)}
            />
            <button type="submit">Delete Member</button>
        </form>
    );
};

export default DeleteMemberForm;