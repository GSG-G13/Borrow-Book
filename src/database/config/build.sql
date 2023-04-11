begin;
drop table if exists users,books cascade;

CREATE TABLE books (
    id serial primary key,
    borrowID  VARCHAR(200) default null,
    author VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    picture VARCHAR(255),
    status boolean default true
);

CREATE TABLE users (
    id serial primary key,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    picture VARCHAR(255)
);


insert into Users (name, email, password, role, picture) values ('admin', 'admin@g.c', 'admin', 'admin', 'admin.jpg');
insert into Books (author, title, picture, status) values ('author1', 'title1', 'book1.jpg', true);
insert into Books (author, title, picture, status) values ('author2', 'title2', 'book2.jpg', true);

commit;