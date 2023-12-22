import React, { useState } from 'react';

const DeleteBookForm = ({ onDelete }) => {
    const [isbn, setIsbn] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/book/${isbn}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Book deleted successfully!');
                onDelete();
                // Reset form or redirect as needed
                window.location.href = '/book'
            } else {
                console.error('Failed to delete book.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Delete Book</h2>
            <label>Book ID:</label>
            <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />

            <button type="submit">Delete Book</button>
        </form>
    );
};

export default DeleteBookForm;