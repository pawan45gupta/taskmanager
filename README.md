# Task Management Application

## Overview
This project is a simple task management application with a frontend built using React and a backend built using Node.js and Express. The backend uses MongoDB for data storage.

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or a MongoDB Atlas account)

## Project Setup

### Backend

1. **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2. **Install backend dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the `backend` directory with the following content:
      ```env
      PORT=5000
      MONGO_URI=mongodb://localhost/taskdb
      ```

4. **Run the backend server**:
    ```bash
    npm start
    ```

    The backend server will start and listen on the port specified in the `.env` file (default is `5000`).

### Frontend

1. **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2. **Install frontend dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the `frontend` directory with the following content:
      ```env
      REACT_APP_API_URL=http://localhost:5000/api
      ```

4. **Run the frontend application**:
    ```bash
    npm start
    ```

    The frontend application will start and typically be accessible at `http://localhost:3000`.

## Running Tests

### Backend Tests

1. **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2. **Run backend tests**:
    ```bash
    npm test
    ```

## Project Structure

### Backend

- **server.js**: Entry point for the backend server.
- **routes/**: Contains route definitions.
- **controllers/**: Contains controller logic for handling requests.
- **models/**: Contains Mongoose models for MongoDB.

### Frontend

- **src/**: Contains the source code for the React application.
- **components/**: Contains React components.
- **App.js**: Main application component.

## Environment Variables

### Backend

- **PORT**: Port on which the backend server will run.
- **MONGO_URI**: URI for connecting to MongoDB.

### Frontend

- **REACT_APP_API_URL**: Base URL for the backend API.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

