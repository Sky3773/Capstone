import React, { useState } from 'react';

const UpdateBookForm = ({ book, onUpdate }) => {
    const [updatedIsbn, setUpdatedIsbn] = useState('');
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedAuthor, setUpdatedAuthor] = useState('');
    const [updatedCategory, setUpdatedCategory] = useState('');
    const [updatedAvailability, setUpdatedAvailability] = useState(0);
    const [updatedPrice, setUpdatedPrice] = useState(0);
    const [updatedCopies, setUpdatedCopies] = useState(0);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`book.isbn`)
        try {
            const response = await fetch(`http://localhost:8080/api/book/${updatedIsbn}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    isbn: updatedIsbn,
                    title: updatedTitle,
                    author: updatedAuthor,
                    category: updatedCategory,
                    availability: updatedAvailability,
                    price: updatedPrice,
                    copies: updatedCopies
                    
                }),
            });

            if (response.ok) {
                console.log('Book updated successfully!');
                // onUpdate();
                // Reset form or redirect as needed
                window.location.href = '/book'
            } else {
                console.error('Failed to update book.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Book</h2>
            <label>ISBN:</label>
            <input
                type="text"
                value={updatedIsbn}
                onChange={(e) => setUpdatedIsbn(e.target.value)}
            /><br/>

            <label>Title:</label>
            <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
            /><br/>

            <label>Author:</label>
            <input
                type="text"
                value={updatedAuthor}
                onChange={(e) => setUpdatedAuthor(e.target.value)}
            /><br/>

            <label>Category:</label>
            <input
                type="text"
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
            /><br/>

            <label>Availability:</label>
            <input
                type="text"
                value={updatedAvailability}
                onChange={(e) => setUpdatedAvailability(e.target.value)}
            /><br/>

            <label>Price:</label>
            <input
                type="number"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(e.target.value)}
            /><br/>

            <label>Copies:</label>
            <input
                type="number"
                value={updatedCopies}
                onChange={(e) => setUpdatedCopies(e.target.value)}
            /><br/>

            <button type="submit">Update Book</button>
        </form>
    );
};

export default UpdateBookForm;