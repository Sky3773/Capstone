import React, { useState } from 'react';
import TransactionList from './TransactionList';
import AddTransactionForm from './AddTransactionForm';
import DeleteTransactionForm from './DeleteTransactionForm';
import UpdateTransactionForm from './UpdateTransactionForm';
import './Transaction.css'

const TransactionPage = () => {
    const [deletedTransactionId, setDeletedTransactionId] = useState(null);
    const [updatedTransactionId, setUpdatedTransactionId] = useState(null);

    const handleDelete = () => {
        setDeletedTransactionId(null);
        // Refresh transaction list or perform other actions as needed
    };

    const handleUpdate = () => {
        setUpdatedTransactionId(null);
        // Refresh transaction list or perform other actions as needed
    };

    return (
        <div>
            <h1>Transaction Page</h1>

             {/* Transaction List */}
             <TransactionList onDelete={() => handleDelete()} onUpdate={() => handleUpdate()} />

            {/* Add Transaction Form */}
            <AddTransactionForm onAdd={() => handleUpdate()} />

            {/* Update Transaction Form */}
            
                <UpdateTransactionForm onUpdate={() => handleUpdate()}/>
            

            {/* Delete Transaction Form */}
            <DeleteTransactionForm onDelete={() => handleDelete()} />

           

            {/* Display Deleted Transaction ID */}
            {deletedTransactionId && <p>Transaction with ID {deletedTransactionId} has been deleted.</p>}
        </div>
    );
};

export default TransactionPage;