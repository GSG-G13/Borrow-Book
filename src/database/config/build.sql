begin
drop table if exists Users cascade;
drop table if exists Books cascade;

CREATE TABLE Books (
    id serial primary key,
    author VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    picture VARCHAR(255),
    status boolean default true,  
);

CREATE TABLE Users (
    id serial primary key,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    picture VARCHAR(255),
);

CREATE TABLE Borrow (
    id serial primary key,
    user_id integer NOT NULL,
    book_id integer NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (book_id) REFERENCES Books(id)
);

insert into Users (name, email, password, role, picture) values ('admin', 'admin@g.c', 'admin', 'admin', 'admin.jpg');
insert into Books (author, title, picture, status) values ('author1', 'title1', 'book1.jpg', true);
insert into Books (author, title, picture, status) values ('author2', 'title2', 'book2.jpg', true);
insert into Borrow (user_id, book_id, status) values (1, 1, 'borrowed');

commit