import React, { useEffect, useState } from 'react';

const TransactionList = ({ onDelete, onUpdate }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/transaction')
            .then(response => response.json())
            .then(data => setTransactions(data))
            .catch(error => console.error('Error fetching transactions', error));
    }, []);

    return (
        <div>
            <h2>Transaction List</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        {`Transaction ID: ${transaction.transactionID}, Librarian ID: ${transaction.librarianID}, 
                        ISBN: ${transaction.isbn}, Member ID: ${transaction.memberID},
                        Borrowed Date: ${transaction.borrowed_date}, Due Date: ${transaction.due_date}, 
                        Actual Return Date: ${transaction.actual_return_date}, Fine: ${transaction.fine}`}
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;