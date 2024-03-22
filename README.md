# Node.js MySQL Login Application

This simple Node.js application allows a user to sign up and log in. User credentials are stored in a MySQL database.

## Installation

1. First, clone this project:

    ```bash
    git clone <repository_url>
    ```

2. Change directory:

    ```bash
    cd nodejs-mysql-login
    ```

3. Install the required packages:

    ```bash
    npm install
    ```

4. Set up your MySQL database and create a database. Then create a database named `loginpage`.

5. Update your MySQL connection details in the `index.js` file:

    ```javascript
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '', // Your MySQL password
        database: 'loginpage'
    });
    ```

6. Start the server:

    ```bash
    node index.js
    ```

## Usage

- Once the application is running, you can access the application by going to `http://localhost:3000/login.html` in your browser.

- To sign up, visit the "/signup" page and enter the required information.

- To log in, visit the "/login" page and use the credentials you signed up with.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
