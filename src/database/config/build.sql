begin;
drop table if exists users,books cascade;

CREATE TABLE books (
    id serial primary key,
    borrowID  integer  default null,
    author VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    picture VARCHAR(255),
    status boolean default true
);

CREATE TABLE users (
    id serial primary key,
    username VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) default null
);


insert into Users (username, firstname, lastname, email, password,role) values ('admin', 'admin123','admin123', 'admin@g.c', 'admin', 'admin');
insert into Books (author, title, picture, status) values ('author1', 'title1', 'book1.jpg', true);
insert into Books (author, title, picture, status) values ('author2', 'title2', 'book2.jpg', true);

commit;