create database 77library;



create table `books`(
isbn varchar (255) primary key
, title varchar (100) 
, author varchar (100)  
, category varchar (50) 
, availability enum ('Yes', 'No') default null
, price int(5) 
, copies int(5) 
);

create table `members`(
memberID int (15) primary key 
, name varchar (100) 
, address varchar (100) 
, number int (8) 
, email varchar (100) 
);

create table `librarians`(
librarianID int (15) primary key
, name varchar (100) 
, address varchar (100) 
, number int (8) 
, email varchar (100) 
);

create table `loginDetails`(
username varchar (20) primary key
, password varchar (40) not null
, role varchar (10)
);

create table `transactions`(
transactionID int (15) primary key
, borrowed_date varchar(10) not null
, due_date varchar(10) not null
, actual_return_date varchar(10) not null
, fine int (3) default null
, isbn varchar (255) 
, memberID int (15) 
, librarianID int (15) 
, foreign key (isbn) references books(isbn)
, foreign key (memberID) references members(memberID)
, foreign key (librarianID) references librarians(librarianID)
);

drop table transactions;
drop table members;
drop table librarians;
drop table books;

drop table logindetails;
drop table pendingBookRequest;

ALTER TABLE books
DROP COLUMN author_name;

use 77library;
select * from books;

-- -- , Permissions enum ('Adult', 'Child') not null
-- , Roles enum ('Administrator', 'Guest') not null