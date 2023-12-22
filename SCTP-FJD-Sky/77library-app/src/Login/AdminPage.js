import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import './Login.css';

const AdminPage = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h2>Welcome, Admin {user && user.username}</h2>
            
            {/* Buttons to navigate to different pages */}
            <Link to="/transaction">
                <button>View Transactions</button>
            </Link>

            <Link to="/member">
                <button>View Members</button>
            </Link>

            <Link to="/book">
                <button>View Books</button>
            </Link>
        </div>
    );
};

export default AdminPage;