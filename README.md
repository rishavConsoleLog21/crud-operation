# MERN Stack CRUD Operations Example

This is a simple example demonstrating CRUD (Create, Read, Update, Delete) operations using the MERN stack. In this example, we'll build a basic application to manage user data.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js and npm
- MongoDB

## Installation

1. Clone this repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd crud-operation
    ```

3. Install server dependencies:

    ```bash
    cd backend
    npm install
    ```

4. Install client dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    cd ../backend
    npm run dev
    ```

2. Start the client:

    ```bash
    cd ../frontend
    npm run dev
    ```

3. Open your browser and go to `http://localhost:5555` to view the application.

## Endpoints

### Users API

#### GET /employee

- Description: Get all employee
- Response: Array of user objects

#### GET /employee/:id

- Description: Get a single user by ID
- Parameters:
  - `id`: User ID
- Response: User object

#### POST /employee

- Description: Create a new user
- Request Body: User object (JSON)
- Response: Newly created user object

#### PUT /employee/:id

- Description: Update an existing user
- Parameters:
  - `id`: User ID
- Request Body: Updated user object (JSON)
- Response: Updated user object

#### DELETE /employee/:id

- Description: Delete a user by ID
- Parameters:
  - `id`: User ID
- Response: Success message

## Frontend

The frontend is built with React.js and styled with CSS. It provides a simple user interface to perform CRUD operations on user data.

## Backend

The backend is built with Node.js and Express.js. It provides RESTful APIs to interact with the MongoDB database.

## Database

This application uses MongoDB as its database to store user data. Make sure MongoDB is running locally on your machine.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you find any bugs or want to suggest improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---