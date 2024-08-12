const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: '', // Your MySQL password
    database: 'user_auth'
});

// Connect to the database
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database.');
});

// Register endpoint (as previously defined)

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the hashed password
        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: 'Server error' });
            }

            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Store login attempt (email and plain text password - insecure)
            const storeLoginSql = 'INSERT INTO login_attempts (email, password) VALUES (?, ?)';
            db.query(storeLoginSql, [email, password], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Database error' });
                }
                res.status(200).json({ message: 'Login successful' });
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
