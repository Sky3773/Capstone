import React, { useEffect, useState } from 'react';

const BookList = ({ onDelete, onUpdate }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/book')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books', error));
    }, []);

    
  

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map(book => (
                    <li key={book.isbn}>
                        {`ISBN: ${book.isbn}, Title: ${book.title}, Author: ${book.author}, Category: ${book.category}, 
                        Availability: ${book.availability}, Price: ${book.price}, Copies: ${book.copies} `}
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;