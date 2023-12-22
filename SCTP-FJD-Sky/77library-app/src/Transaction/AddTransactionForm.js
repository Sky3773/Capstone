import React, { useState } from 'react';

const AddTransactionForm = ({ onAdd }) => {
    const [transactionID, setTransactionID] = useState('');
    const [isbn, setIsbn] = useState('');
    const [librarianID, setLibrarianID] = useState('');
    const [memberID, setMemberID] = useState('');
    const [borrowed_date, setBorrowedDate] = useState('');
    const [due_date, setDueDate] = useState('');
    const [actual_return_date, setActualReturnDate] = useState('');
    const [fine, setFine] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/transaction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    transactionID,
                    borrowed_date,
                    due_date,
                    actual_return_date,
                    fine,
                    isbn,
                    memberID,
                    librarianID
                }),
            });

            if (response.ok) {
                console.log('Transaction added successfully!');
                onAdd();
                // Reset form or redirect as needed
                window.location.href = '/transaction'
            } else {
                console.error('Failed to add transaction.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Transaction</h2>
            <label>Transaction ID:</label>
            <input type="number" value={transactionID} onChange={(e) => setTransactionID(e.target.value)} /><br/>

            <label>Borrowed Date:</label>
            <input type="text" value={borrowed_date} onChange={(e) => setBorrowedDate(e.target.value)} /><br/>

            <label>Due Date:</label>
            <input type="text" value={due_date} onChange={(e) => setDueDate(e.target.value)} /><br/>

            <label>Actual Return Date:</label>
            <input type="text" value={actual_return_date} onChange={(e) => setActualReturnDate(e.target.value)} /><br/>

            <label>Fine:</label>
            <input type="number" value={fine} onChange={(e) => setFine(e.target.value)} /><br/>

            <label>ISBN:</label>
            <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} /><br/>

            <label>Member ID:</label>
            <input type="number" value={memberID} onChange={(e) => setMemberID(e.target.value)} /><br/>
            
            <label>Librarian ID:</label>
            <input type="number" value={librarianID} onChange={(e) => setLibrarianID(e.target.value)} /><br/>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default AddTransactionForm;