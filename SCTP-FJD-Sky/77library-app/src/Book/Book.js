import React, { useState } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import DeleteBookForm from './DeleteBookForm';
import UpdateBookForm from './UpdateBookForm';
import './Book.css';

const BookPage = () => {
    const [books, setBooks] = useState(null);
    const [deletedIsbn, setDeletedIsbn] = useState(null);
    const [updatedIsbn, setUpdatedIsbn] = useState(null);

    const handleDelete = () => {
        setDeletedIsbn(null);
        // Refresh book list or perform other actions as needed
    };

    const handleUpdate = () => {
        setUpdatedIsbn(null);
        // Refresh book list or perform other actions as needed
    };

    const handleAddBook = newBook => {
      // Send a POST request to your Spring Boot backend to add a new member
      fetch('http://localhost:8080/api/book', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBook),
      })
          .then(response => response.json())
          .then(data => setBooks([...books, data]));
    }

    return (
        <div>
            <h1>Book Page</h1>

            {/* Book List */}
            <BookList books={books} />

            {/* Add Book Form */}
            <AddBookForm onAdd={handleAddBook} />

            {/* Update Book Form */}
            <UpdateBookForm onUpdate={handleUpdate} />

            {/* Delete Book Form */}
            <DeleteBookForm onDelete={() => handleDelete()} />



            {/* Display Deleted Book ID */}
            {deletedIsbn && <p>Book with ID {deletedIsbn} has been deleted.</p>}
        </div>
    );
};

export default BookPage;