import React, { useState } from 'react';

const AddBookForm = ({ onAdd }) => {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [availability, setAvailability] = useState('');
    const [price, setPrice] = useState('');
    const [copies, setCopies] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    isbn,
                    title,
                    author,
                    category,
                    availability,
                    price,
                    copies
                    
                }),
            });

            if (response.ok) {
                console.log('Book added successfully!');
                // onAdd();
                // Reset form or redirect as needed
                window.location.href = '/book'
            } else {
                console.error('Failed to add book.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <label>ISBN:</label>
            <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} /><br/>

            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br/>

            <label>Author:</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} /><br/>

            <label>Category:</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /><br/>

            <label>Availability:</label>
            <input type="text" value={availability} onChange={(e) => setAvailability(e.target.value)} /><br/>

            <label>Price:</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /><br/>

            <label>Copies:</label>
            <input type="number" value={copies} onChange={(e) => setCopies(e.target.value)} /><br/>

            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBookForm;