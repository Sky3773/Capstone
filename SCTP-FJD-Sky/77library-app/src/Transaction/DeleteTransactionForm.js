import React, { useState } from 'react';

const DeleteTransactionForm = ({ onDelete }) => {
    const [transactionID, setTransactionID] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/transaction/${transactionID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Transaction deleted successfully!');
                onDelete();
                // Reset form or redirect as needed
                window.location.href = '/transaction'
            } else {
                console.error('Failed to delete transaction.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Delete Transaction</h2>
            <label>Transaction ID:</label>
            <input type="number" value={transactionID} onChange={(e) => setTransactionID(e.target.value)} />

            <button type="submit">Delete Transaction</button>
        </form>
    );
};

export default DeleteTransactionForm;