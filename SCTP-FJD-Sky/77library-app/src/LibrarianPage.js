import React, { useEffect, useState } from 'react';
import './Librarian.css';

const LibrarianList = () => {
    const [librarians, setLibrarians] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/librarian') // Update with your backend URL
            .then(response => response.json())
            .then(data => setLibrarians(data))
            .catch(error => console.error('Error fetching librarians', error));
    }, []);

    return (
        <div>
            <h2>Librarian List</h2>
            <ul>
                {librarians.map(librarian => (
                    <li key={librarian.id}>
                        {`ID: ${librarian.librarianID}, Name: ${librarian.name}, Address:${librarian.address}, Contact Number:${librarian.number}, Email:${librarian.email}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default LibrarianList;