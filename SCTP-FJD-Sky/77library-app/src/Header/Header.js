import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import './Header.css';

function Header (){
  return (
    <header>
      
        {/* You can use an image or text for the logo */}
        <img src="C:\Users\Sky\Desktop\SCTP\Capstone\icon\77library.png" alt="Library Logo" />
        {/* or */}
        <span>77Library Management System</span>
      
      <nav>
        <ul>
          {/* Example navigation links */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Search">Search</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/Signup">Members</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;