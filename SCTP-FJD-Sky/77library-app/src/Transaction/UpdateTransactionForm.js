import React, { useState } from 'react';

const UpdateTransactionForm = ({ transaction, onUpdate }) => {
    const [updatedTransactionID, setUpdatedTransactionID] = useState(0);
    const [updatedLibrarianID, setUpdatedLibrarianID] = useState(0);
    const [updatedIsbn, setUpdatedIsbn] = useState('');
    const [updatedMemberID, setUpdatedMemberID] = useState(0);
    const [updatedBorrowedDate, setUpdatedBorrowedDate] = useState('');
    const [updatedDueDate, setUpdatedDueDate] = useState('');
    const [updatedActualReturnDate, setUpdatedActualReturnDate] = useState('');
    const [updatedFine, setUpdatedFine] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/transaction/${updatedTransactionID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    transactionID: updatedTransactionID,
                    librarianID: updatedLibrarianID,
                    isbn: updatedIsbn,
                    memberID: updatedMemberID,
                    borrowed_date: updatedBorrowedDate,
                    due_date: updatedDueDate,
                    actual_return_date: updatedActualReturnDate,
                    fine: updatedFine
                }),
            });

            if (response.ok) {
                console.log('Transaction updated successfully!');
                // Reset form or redirect as needed
                window.location.href = '/transaction'
            } else {
                console.error('Failed to update transaction.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Transaction</h2>
            <label>Transaction ID:</label>
            <input
                type="number"
                value={updatedTransactionID}
                onChange={(e) => setUpdatedTransactionID(e.target.value)}
            /><br/>

            <label>Librarian ID:</label>
            <input
                type="number"
                value={updatedLibrarianID}
                onChange={(e) => setUpdatedLibrarianID(e.target.value)}
            /><br/>

            <label>ISBN:</label>
            <input
                type="text"
                value={updatedIsbn}
                onChange={(e) => setUpdatedIsbn(e.target.value)}
            /><br/>

            <label>Member ID:</label>
            <input
                type="number"
                value={updatedMemberID}
                onChange={(e) => setUpdatedMemberID(e.target.value)}
            /><br/>

            <label>Borrowed Date:</label>
            <input
                type="text"
                value={updatedBorrowedDate}
                onChange={(e) => setUpdatedBorrowedDate(e.target.value)}
            /><br/>

            <label>Due Date:</label>
            <input
                type="text"
                value={updatedDueDate}
                onChange={(e) => setUpdatedDueDate(e.target.value)}
            /><br/>

            <label>Actual Return Date:</label>
            <input
                type="text"
                value={updatedActualReturnDate}
                onChange={(e) => setUpdatedActualReturnDate(e.target.value)}
            /><br/>

            <label>Fine:</label>
            <input
                type="number"
                value={updatedFine}
                onChange={(e) => setUpdatedFine(e.target.value)}
            /><br/>

            <button type="submit">Update Transaction</button>
        </form>
    );
};

export default UpdateTransactionForm;