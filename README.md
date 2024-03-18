## React Native Expo User Authentication App

This repository contains the code for a User Authentication app built with React Native (Expo) for the client-side and Express.js for the server-side. The app allows users to register new accounts and login to access protected resources.

### Folder Structure

client
|__ Expo React Native App

server
|__ Express App


### Getting Started

#### Client (Expo React Native App)

1. Navigate to the `client` directory.
    ```
    cd client
    ```

2. Install dependencies.
    ```
    npm install
    ```

3. Start the Expo development server.
    ```
    npx expo start
    ```
   
   This command will start the Expo development server. You can use the Expo Go app on your mobile device to scan the QR code and view the app.

#### Server (Express App)

1. Navigate to the `server` directory.
    ```
    cd server
    ```

2. Install dependencies.
    ```
    npm install
    ```

3. Start the server in development mode.
    ```
    npm run dev
    ```
   
   This command will start the server using nodemon, allowing automatic restarts when files change during development.

### Server Configuration

The server runs on `localhost:5000` by default. You can modify the port or other configurations in the `index.js` file of the server.

### Server Scripts

- `start`: Starts the server using Node.js.
- `dev`: Starts the server in development mode using nodemon for automatic restarts.

### Technologies Used

- **Client-side**:
  - React Native
  - Expo
  - Axios

- **Server-side**:
  - Node.js
  - Express.js
  - MongoDB (for database)

### API Endpoints

- `POST /api/v1/user/register`: Register a new user.
- `POST /api/v1/user/login`: Login with existing credentials.

### Contributing

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests. We welcome contributions from everyone!

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgements

- Thanks to [Expo](https://expo.dev/) for making React Native development easier.
- Thanks to the Express.js community for creating a robust and flexible server framework.
