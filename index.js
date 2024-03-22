const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loginpage'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('SQL connection successfully established');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            res.status(500).send('Server error');
        }
        if (result.length > 0) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid email or password');
        }
    });
});

app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkUserQuery, [email], (err, result) => {
        if (err) {
            res.status(500).send('Server error');
            return;
        }
        if (result.length > 0) {
            res.status(409).send('This email address is already in use');
            return;
        }
        
        const insertUserQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.query(insertUserQuery, [email, password], (err, result) => {
            if (err) {
                res.status(500).send('Server error');
                return;
            }
            res.status(200).send('Registration completed successfully');
        });
    });
});



app.listen(port, () => {
    console.log(`The server is running on ${port}`);
});
