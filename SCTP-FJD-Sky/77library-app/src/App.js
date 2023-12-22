
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './Book/Book.js';
import BookList from './Book/BookList.js';
import MemberPage from './Member/MemberPage.js';
import LibrarianList from './LibrarianPage.js';
import TransactionPage from './Transaction/TransactionPage.js';
import { UserProvider } from './Login/UserContext.js';
import Login from './Login/Login.js';
import UserPage from './Login/UserPage.js';
import AdminPage from './Login/AdminPage.js';





const App = () => {

  

    return (  
      <UserProvider>
        <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path='/book' element={<Book/>}/>          
          <Route path='/booklist' element={<BookList/>}/> 
          <Route path='/member' element={<MemberPage/>}/>
          <Route path='/librarian' element={<LibrarianList/>}/>
          <Route path='/transaction' element={<TransactionPage/>}/>          
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/user" element={<UserPage/>} />          
        </Routes>
        </Router>
        </UserProvider>
        
      
    );
  }


export default App;