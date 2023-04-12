# Borrow Book Application

A web application that allows users to borrow and return books from a library. The application is built using [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) on the server-side.

## Features

- Users can create an account and log in to the application.
- Users can search for books and view book details.
- Users can borrow and return books from the library.
- Admins can add, edit, and delete books from the library.
- Admins can view a list of all borrowed books and their statuses.

## Installation

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/GSG-G13/Borrow-Book.git`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add the following environment variables:
    - Db_URL=<your Postgres connection>
    - SECRET_KEY=<your secret key for JWT>

4. Run the application: `npm start`

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- pg-pool
- JWT

## Contributors

- Shatha Amin
- Momen Marwan
- Mohannad Sabaa
- Abdullah Alsharif
