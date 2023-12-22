import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import './Login.css';

const UserPage = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h2>Welcome, User {user && user.username}</h2>
            <Link to="/booklist">
                <button>View Book List</button>
            </Link>
        </div>
    );
};

export default UserPage;