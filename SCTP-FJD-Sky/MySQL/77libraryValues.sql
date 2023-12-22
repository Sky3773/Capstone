INSERT INTO books(isbn, title, author, category, availability, price, copies)
VALUES ('9788654552277', 'X-Men: God Loves, Man Kills', 'Chris', 'Comics', 'Yes', 98, 39),
('0964161484100', 'Mike Tyson : Undisputed Truth', 'Larry Sloman, Mike Tyson', 'Sports', 'Yes', 654, 79),
('6901142585540', 'V for Vendetta', 'Alan Moore', 'Comics', 'Yes', 600, 23),
('9094996245442', 'When Breath Becomes Air', 'Paul Kalanithi', 'Medical', 'Yes', 500, 94),
('8653491200700', 'The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 'Yes', 432, 120);

INSERT INTO members(memberID, name, address, number, email)
VALUES (7700001, 'Daniel', '70 University Road', 91234567, 'daniel@gmail.com'),
(7700002, 'Penny', '88 Adam Road', 92238228, 'penny@gmail.com'),
(7700003, 'Keith', '14 Neil Road', 93338888, 'keith@gmail.com'),
(7700004, 'Emma', '1 Everton Road', 92299339, 'emma@gmail.com'),
(7700005, 'Callum', '37 Meragi Road', 91177117, 'callum@gmail.com');

INSERT INTO librarians(librarianID, name, address, number, email)
VALUES (7701, 'Benjamin', '155 Simei Road', 95511277, 'benj@gmail.com'),
(7702, 'Valencia', '17 Sunrise Way', 94449444, 'valen@gmail.com'),
(7703, 'Rahul', '53 Gucci Ave', 81187117, 'rahul@gmail.com'),
(7704, 'Tasmania', '99 Sukhumvit Road', 81819919, 'tasm@gmail.com'),
(7705, 'Peekachu', '2 Kampong Bahru Road', 89898899, 'peeka@gmail.com');

INSERT INTO logindetails(username, password, role)
VALUES('daniel', 'tiger', 'user'),
('penny', 'tiger', 'user'),
('keith', 'tiger', 'user'),
('emma', 'tiger', 'user'),
('callum', 'tiger', 'user'),
('benjamin','admin', 'admin'),
('valencia','admin', 'admin'),
('rahul','admin', 'admin'),
('tasmania','admin', 'admin'),
('peekachu','admin', 'admin');

INSERT INTO transactions(transactionID, borrowed_date, due_date, actual_return_date, fine, isbn, memberID, librarianID)
VALUES (00001, '20/10/2023', '03/11/2023', '01/11/2023', 0, '9788654552277', 7700001, 7701),
(00002, '21/10/2023', '04/11/2023', '03/11/2023', 0, '0964161484100', 7700002, 7702),
(00003, '21/10/2023', '04/11/2023', '05/11/2023', 20, '6901142585540', 7700003, 7703),
(00004, '23/10/2023', '06/11/2023', '01/11/2023', 0, '9094996245442', 7700004, 7704),
(00005, '25/10/2023', '08/11/2023', '08/11/2023', 0, '8653491200700', 7700005, 7705);



